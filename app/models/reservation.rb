class Reservation < ApplicationRecord
  belongs_to :calendar

  validates :date, presence: true
  validates :date, uniqueness: true 

  
end
