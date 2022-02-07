class Calendar < ApplicationRecord
  belongs_to :property
  has_many :reservations
end
