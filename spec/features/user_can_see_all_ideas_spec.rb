require 'rails_helper'

RSpec.feature "user can see all the ideas" do
  scenario "user can see all ideas on the home page" do
    idea = Idea.create(title: "idea",
                        body: "idea body")

    idea_1 = Idea.create(title: "idea_1",
                        body: "idea_1 body")

    visit '/'

    expect(current_path).to eq(root_path)

    expect(page).to have_content(idea.title)
    expect(page).to have_content(idea.body)
    expect(page).to have_content(idea.quality)
    expect(page).to have_content(idea_1.title)
    expect(page).to have_content(idea_1.body)
    expect(page).to have_content(idea_1.quality)
  end
end
