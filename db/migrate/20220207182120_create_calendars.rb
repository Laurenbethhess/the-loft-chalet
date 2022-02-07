class CreateCalendars < ActiveRecord::Migration[7.0]
  def change
    create_table :calendars do |t|
      t.string :date
      t.references :property, null: false, foreign_key: true

      t.timestamps
    end
  end
end
