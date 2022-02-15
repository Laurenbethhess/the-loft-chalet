class AddSummaryToProperties < ActiveRecord::Migration[7.0]
  def change
    add_column :properties, :summary, :text
  end
end
