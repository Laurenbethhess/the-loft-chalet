class Reservation < ApplicationRecord
  belongs_to :calendar

  validates :date, presence: true
end
