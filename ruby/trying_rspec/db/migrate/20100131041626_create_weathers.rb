class CreateWeathers < ActiveRecord::Migration
  def self.up
    create_table :weathers do |t|
      t.string :zipcode
      t.string :city
      t.string :region
      t.string :temperature_high
      t.string :temperature_low
      t.string :temperature_units
      t.string :link
      t.date :recorded_at
      t.datetime :created_at
      t.datetime :updated_at

      t.timestamps
    end
  end

  def self.down
    drop_table :weathers
  end
end
