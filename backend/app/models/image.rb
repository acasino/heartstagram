class Image < ApplicationRecord
  belongs_to :user, optional: true
  has_many :hearts
  has_one_attached :image
end
