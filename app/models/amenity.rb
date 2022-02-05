class Amenity < ApplicationRecord
  belongs_to :property

  def self.ordered_by_id
    self.order(:name)
end

end

