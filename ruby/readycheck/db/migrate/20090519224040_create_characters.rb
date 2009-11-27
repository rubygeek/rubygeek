class CreateCharacters < ActiveRecord::Migration
  def self.up
    create_table :characters do |t|
      t.integer :user_id
      t.string  :character_name
      t.integer :character_level
      t.string  :character_class
      t.string  :character_spec1_name
      t.string  :character_spec1_utility
      t.string  :character_spec1_tree
      t.string  :character_spec2_name
      t.string  :character_spec2_utility
      t.string  :character_spec2_tree
      t.string  :character_profession1_name
      t.string  :character_profession2_name
      t.string  :character_profession1_level
      t.string  :character_profession2_level
      t.timestamps
    end
  end

  def self.down
    drop_table :characters
  end
end
