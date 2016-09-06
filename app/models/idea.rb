class Idea < ApplicationRecord
  enum quality: { oops: 0, plausible: 1, genius: 2 }

  validates :title, presence: true
  validates :body, presence: true
end
