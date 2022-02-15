class Reservation < ApplicationRecord
  belongs_to :calendar

  validates :date, presence: true
  validates :date, uniqueness: true 

  validates :date, format: /^\d{2}\/\d{2}\/\d{4}$/


  
end
