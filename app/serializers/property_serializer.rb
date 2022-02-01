class PropertySerializer < ActiveModel::Serializer
  attributes :id, :name, :winter_weekend_price, :winter_weekday_price, :spring_weekend_price, :spring_weekday_price, :summer_weekend_price, :summer_weekday_price, :fall_weekend_price, :fall_weekday_price, :description
end
