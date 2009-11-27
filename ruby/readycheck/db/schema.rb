# This file is auto-generated from the current state of the database. Instead of editing this file, 
# please use the migrations feature of Active Record to incrementally modify your database, and
# then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your database schema. If you need
# to create the application database on another system, you should be using db:schema:load, not running
# all the migrations from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20090524220221) do

  create_table "characters", :force => true do |t|
    t.integer  "user_id"
    t.string   "character_name"
    t.integer  "character_level"
    t.string   "character_class"
    t.string   "character_spec1_name"
    t.string   "character_spec1_utility"
    t.string   "character_spec1_tree"
    t.string   "character_spec2_name"
    t.string   "character_spec2_utility"
    t.string   "character_spec2_tree"
    t.string   "character_profession1_name"
    t.string   "character_profession2_name"
    t.string   "character_profession1_level"
    t.string   "character_profession2_level"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "users", :force => true do |t|
    t.string   "name"
    t.string   "username"
    t.string   "email"
    t.string   "crypted_password"
    t.string   "password_salt"
    t.string   "persistence_token"
    t.integer  "access_level"
    t.integer  "gmt_offset"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
