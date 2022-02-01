class CommentRatingSerializer < ActiveModel::Serializer
  attributes :id, :comment, :rating
  has_one :property
  has_one :user
end
