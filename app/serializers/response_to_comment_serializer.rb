class ResponseToCommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :date_updated
  has_one :comment_rating
  has_one :user
end
