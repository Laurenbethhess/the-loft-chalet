class CommentRatingSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating, :date_created, :date_updated
  has_one :property
  has_one :user
  has_many :response_to_comments
end
