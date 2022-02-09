# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_02_09_140222) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "amenities", force: :cascade do |t|
    t.bigint "property_id", null: false
    t.string "name"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["property_id"], name: "index_amenities_on_property_id"
  end

  create_table "calendars", force: :cascade do |t|
    t.string "property_name"
    t.bigint "property_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["property_id"], name: "index_calendars_on_property_id"
  end

  create_table "comment_ratings", force: :cascade do |t|
    t.text "comment"
    t.float "rating"
    t.bigint "property_id", null: false
    t.bigint "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["property_id"], name: "index_comment_ratings_on_property_id"
    t.index ["user_id"], name: "index_comment_ratings_on_user_id"
  end

  create_table "photos", force: :cascade do |t|
    t.string "photo_name"
    t.string "photo_url"
    t.bigint "property_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["property_id"], name: "index_photos_on_property_id"
  end

  create_table "properties", force: :cascade do |t|
    t.string "name"
    t.float "winter_weekend_price"
    t.float "winter_weekday_price"
    t.float "spring_weekend_price"
    t.float "spring_weekday_price"
    t.float "summer_weekend_price"
    t.float "summer_weekday_price"
    t.float "fall_weekend_price"
    t.float "fall_weekday_price"
    t.text "description"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "reservations", force: :cascade do |t|
    t.string "date"
    t.bigint "calendar_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["calendar_id"], name: "index_reservations_on_calendar_id"
  end

  create_table "response_to_comments", force: :cascade do |t|
    t.bigint "comment_rating_id", null: false
    t.bigint "user_id", null: false
    t.string "comment"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["comment_rating_id"], name: "index_response_to_comments_on_comment_rating_id"
    t.index ["user_id"], name: "index_response_to_comments_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.string "avatar_url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "amenities", "properties"
  add_foreign_key "calendars", "properties"
  add_foreign_key "comment_ratings", "properties"
  add_foreign_key "comment_ratings", "users"
  add_foreign_key "photos", "properties"
  add_foreign_key "reservations", "calendars"
  add_foreign_key "response_to_comments", "comment_ratings"
  add_foreign_key "response_to_comments", "users"
end
