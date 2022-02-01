class Property < ApplicationRecord
    has_many :comment_ratings
    has_many :users, through: :comment_ratings
    has_many :amenities
    has_many :photos
end
