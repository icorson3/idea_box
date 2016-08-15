require 'rails_helper'

RSpec.describe "Ideas API", type: :request do
  it "retrieves all ideas" do
    idea_1 = Idea.create(title: "Idea1",
                          body: "This is my idea1")

    idea_2 = Idea.create(title: "Idea2",
                          body: "This is my idea2",
                          quality: "plausible")

    idea_3 = Idea.create(title: "Idea3",
                          body: "This is my idea3",
                          quality: "genius")

    get '/api/v1/ideas'

    expect(response).to be_success

    json = JSON.parse(response.body, symbolize_names: true)

    expect(json.count).to eq(Idea.count)
    expect(json.first[:title]).to eq(idea_1.title)
    expect(json.first[:body]).to eq(idea_1.body)
    expect(json.first[:quality]).to eq(idea_1.quality)
    expect(json.first.keys).to contain_exactly(:id, :title, :body, :quality)
    expect(idea_1.quality).to eq("swill")
    expect(json.second[:title]).to eq(idea_2.title)
    expect(json.second[:body]).to eq(idea_2.body)
    expect(json.second[:quality]).to eq(idea_2.quality)
    expect(json.second.keys).to contain_exactly(:id, :title, :body, :quality)
    expect(idea_2.quality).to eq("plausible")
    expect(json.third[:title]).to eq(idea_3.title)
    expect(json.third[:body]).to eq(idea_3.body)
    expect(json.third[:quality]).to eq(idea_3.quality)
    expect(json.third.keys).to contain_exactly(:id, :title, :body, :quality)
    expect(idea_3.quality).to eq("genius")
  end

  it "creates a new with idea with default quality" do
    params = {idea: { title: 'idea1', body:"blah" }}

    post "/api/v1/ideas", params

    expect(response).to be_success

    get "/api/v1/ideas"

    json = JSON.parse(response.body, symbolize_names: true)

    expect(Idea.count).to eq(1)
    expect(json.first[:title]).to eq(params[:idea][:title])
    expect(json.first[:body]).to eq(params[:idea][:body])
    expect(json.first[:quality]).to eq("swill")
  end

  it "can update a idea" do
    idea_1 = Idea.create(title: "Burn",
                body: "burn")

    get "/api/v1/ideas"

    json = JSON.parse(response.body, symbolize_names: true)

    expect(json.first[:title]).to eq(idea_1.title)
    expect(json.first[:body]).to eq(idea_1.body)

    params =  { idea: { id: idea_1.id, title: 'bob' }}

    patch "/api/v1/ideas/#{idea_1.id}", params

    expect(response).to be_success

    idea_1.reload

    get "/api/v1/ideas"

    json = JSON.parse(response.body, symbolize_names: true)

    expect(json.first[:title]).to eq('bob')
  end

  it "can delete a idea" do
    idea_1 = Idea.create(title: "Idea1",
                          body: "This is my idea1")

    get "/api/v1/ideas"

    json = JSON.parse(response.body, symbolize_names: true)

    expect(json.first[:title]).to eq(idea_1.title)
    expect(json.first[:body]).to eq(idea_1.body)

    delete "/api/v1/ideas/#{idea_1.id}"

    expect(response).to be_success

    get "/api/v1/ideas"

    json = JSON.parse(response.body, symbolize_names: true)

    expect(json).to eq([])
  end
end
