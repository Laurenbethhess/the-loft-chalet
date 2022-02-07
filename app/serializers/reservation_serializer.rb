class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :date
  has_one :calendar
end
