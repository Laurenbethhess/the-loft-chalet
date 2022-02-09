class CreateResponseToComments < ActiveRecord::Migration[7.0]
  def change
    create_table :response_to_comments do |t|
      t.references :comment_rating, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :comment

      t.timestamps
    end
  end
end
