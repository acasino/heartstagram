class Image < ApplicationRecord
  belongs_to :user
  has_many :hearts
  has_one_attached :image
end
