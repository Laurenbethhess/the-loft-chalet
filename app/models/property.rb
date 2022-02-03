class Property < ApplicationRecord
    has_many :comment_ratings
    has_many :users, through: :comment_ratings
    has_many :amenities
    has_many :photos

    attribute :average_rating

    def average_rating
        if self.comment_ratings.sum{|comment_rating| comment_rating.rating} > 0
            self.comment_ratings.sum{|comment_rating| comment_rating.rating} / self.comment_ratings.length
        else
            0
        end
    end 

end
