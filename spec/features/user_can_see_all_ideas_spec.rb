require 'rails_helper'

RSpec.feature "user can see all the ideas" do
  scenario "user can see all ideas on the home page" do
    idea = Idea.create(title: "idea",
                        body: "idea body")

    idea_1 = Idea.create(title: "idea_1",
                        body: "idea_1 body")

    visit '/'

    expect(current_path).to eq(root_path)

    within('nav') do
      expect(page).to have_content("Instant Ideas")
    end

    within('h1') do
      expect(page).to have_content("All Ideas")
    end

    within("#each-idea") do
      expect(page).to have_content(idea.title)
      expect(page).to have_content(idea.body)
      expect(page).to have_content(idea.quality)
      expect(page).to have_content(idea_1.title)
      expect(page).to have_content(idea_1.body)
      expect(page).to have_content(idea_1.quality)
      expect(page).to have_button("Delete")
      expect(page).to have_button("Thumbs Up")
      expect(page).to have_button("Thumbs Down")
    end

    within('h2') do
      expect(page).to have_content("What is your idea?")
    end

    within('.form-group') do
      expect(page).to have_content("Title:")
      expect(page).to have_content("Body:")
    end
  end
end
