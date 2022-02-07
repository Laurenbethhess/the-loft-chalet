class ChangeColumnName < ActiveRecord::Migration[7.0]
  def change
    rename_column :calendars, :date, :property_name
  end
end
