class PhotoSerializer < ActiveModel::Serializer
  attributes :id, :photo_name, :photo_url
  has_one :property
end
