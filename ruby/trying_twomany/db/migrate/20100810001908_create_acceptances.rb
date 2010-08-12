class CreateAcceptances < ActiveRecord::Migration 
   def self.up
    create_table :acceptances do |t|
      t.integer :user_id
      t.integer :invitation_id
      t.boolean :accepted
      t.timestamps
    end
  end

  def self.down
    drop_table :acceptances
  end
end
