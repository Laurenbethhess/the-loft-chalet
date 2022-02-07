class CalendarSerializer < ActiveModel::Serializer
  attributes :id, :property_name
  has_one :property
  has_many :reservations
end
