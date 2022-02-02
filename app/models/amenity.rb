class Amenity < ApplicationRecord
  belongs_to :property

  def self.ordered_by_id
    self.order(:id)
end

end

