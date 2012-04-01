class CreateAddresses < ActiveRecord::Migration
  def change
    create_table :addresses do |t|
      t.integer :contact_id
      t.string :street1
      t.string :street2
      t.integer :zipcode_id

      t.timestamps
    end
  end
end
