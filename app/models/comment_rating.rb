class CommentRating < ApplicationRecord
  belongs_to :property
  belongs_to :user

<<<<<<< HEAD
  validates :user, uniqueness: true, message: "You can only leave one review"
  validates :rating, presence: true, message: "You must leave a rating"
=======
  validates :user, uniqueness: true
  validates :rating, presence: true
>>>>>>> parent of 340d744 (styled buttons)

  attribute :date_created
  attribute :date_updated

  def date_created
    self.created_at.to_date.strftime("%B %d, %Y")
  end

  def date_updated
    self.updated_at.to_date.strftime("%B %d, %Y")
  end

end
