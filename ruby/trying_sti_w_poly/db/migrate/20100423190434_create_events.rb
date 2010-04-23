class CreateEvents < ActiveRecord::Migration
  def self.up
    create_table :events do |t|
      t.string :name
      t.datetime :start_at
      t.date :rsvp_on
      t.text :description

      t.timestamps
    end
  end

  def self.down
    drop_table :events
  end
end
