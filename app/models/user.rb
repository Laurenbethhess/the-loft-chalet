class User < ApplicationRecord
    has_many :comment_ratings
    has_many :properties, through: :comment_ratings

    has_secure_password

end
