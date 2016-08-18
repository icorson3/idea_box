class Idea < ApplicationRecord
  enum quality: { swill: 0, plausible: 1, genius: 2 }

  validates :title, presence: true
  validates :body, presence: true
end
