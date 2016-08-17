class Idea < ApplicationRecord
  enum quality: { swill: 0, plausible: 1, genius: 2 }

  def self.search(search)
    where("title LIKE ?", "%#{search}%")
    where("body LIKE ?", "%#{search}%")
  end
end
