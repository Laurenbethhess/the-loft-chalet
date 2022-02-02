class Property < ApplicationRecord
    has_many :comment_ratings
    has_many :users, through: :comment_ratings
    has_many :amenities
    has_many :photos

    attribute :average_rating

    def average_rating
        self.comment_ratings.sum{|comment_rating| comment_rating.rating} / self.comment_ratings.length
    end 

end
