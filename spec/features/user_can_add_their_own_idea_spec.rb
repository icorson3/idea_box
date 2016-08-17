require 'rails_helper'

RSpec.feature "user adds a game", js: true do
  scenario "user adds a game using api" do
    idea = Idea.create(title: "ideaaa",
                        body: "iddeadaddd")
    visit '/'

    fill_in "idea-title", with: "Another Idea"
    fill_in "idea-body", with: "Another Idea Body"

    click_on "Save"

    expect(Idea.last.title).to eq("Another Idea")
    expect(page).to have_content("Another Idea Body")
  end
end
