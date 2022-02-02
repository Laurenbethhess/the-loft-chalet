class CommentRating < ApplicationRecord
  belongs_to :property
  belongs_to :user

  attribute :date_created
  attribute :date_updated

  def date_created
    self.created_at.to_date.strftime("%B %d, %Y")
  end

  def date_updated
    self.updated_at.to_date.strftime("%B %d, %Y")
  end

end
