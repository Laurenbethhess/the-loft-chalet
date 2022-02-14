class User < ApplicationRecord
    has_many :comment_ratings, dependent: :destroy
    has_many :response_to_comments, dependent: :destroy
    has_many :properties, through: :comment_ratings

    has_secure_password

    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, uniqueness: true


end
