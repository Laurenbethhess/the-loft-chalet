class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :name
      t.float :winter_weekend_price
      t.float :winter_weekday_price
      t.float :spring_weekend_price
      t.float :spring_weekday_price
      t.float :summer_weekend_price
      t.float :summer_weekday_price
      t.float :fall_weekend_price
      t.float :fall_weekday_price
      t.text :description

      t.timestamps
    end
  end
end
