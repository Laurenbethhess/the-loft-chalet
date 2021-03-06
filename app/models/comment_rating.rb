class CommentRating < ApplicationRecord
  belongs_to :property
  belongs_to :user
  has_many :response_to_comments, dependent: :destroy

  validates :user, uniqueness: true  
  validates :rating, presence: true

  attribute :date_created
  attribute :date_updated

  def date_created
    self.created_at.to_date.strftime("%B %d, %Y")
  end

  def date_updated
    self.updated_at.strftime("%B %d, %Y %I:%M%p")
  end

  # def date_updated
  #   Time.now.strftime("%B %d, %Y %I:%M%p")
  # end

  def self.ordered_by_id
    self.order(:date_updated)
  end

  # def self.average_rating
  #   if self.sum(:rating) / self.count(:rating) > 0.0
  #     self.sum(:rating) / self.count(:rating)
  #   else
  #     0.0
  #   end
  # end
  
  def self.average_rating
    self.sum(:rating) / self.count(:rating)
  end

  def self.responses
    self.all.map {|review| review.response_to_comments}
  end

end
