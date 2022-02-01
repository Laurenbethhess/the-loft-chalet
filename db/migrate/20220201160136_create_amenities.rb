class CreateAmenities < ActiveRecord::Migration[7.0]
  def change
    create_table :amenities do |t|
      t.references :property, null: false, foreign_key: true
      t.string :name
      t.text :description

      t.timestamps
    end
  end
end
