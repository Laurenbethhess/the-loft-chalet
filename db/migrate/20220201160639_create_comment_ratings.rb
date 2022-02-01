class CreateCommentRatings < ActiveRecord::Migration[7.0]
  def change
    create_table :comment_ratings do |t|
      t.text :comment
      t.float :rating
      t.references :property, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
