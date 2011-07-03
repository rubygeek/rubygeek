class CreateSnippits < ActiveRecord::Migration
  def self.up
    create_table :snippits do |t|
      t.string :name
      t.string :language
      t.text :code
      t.text :highlighted_code

      t.timestamps
    end
  end

  def self.down
    drop_table :snippits
  end
end
