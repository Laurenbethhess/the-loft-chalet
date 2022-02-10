class ResponseToCommentSerializer < ActiveModel::Serializer
  attributes :id, :comment, :date_updated, :comment_rating_id, :user_id
  has_one :comment_rating
  has_one :user
end
