class AmenitySerializer < ActiveModel::Serializer
  attributes :id, :name, :description
  has_one :property
end
