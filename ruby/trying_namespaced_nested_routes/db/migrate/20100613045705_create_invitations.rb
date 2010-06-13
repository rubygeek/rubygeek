class CreateInvitations < ActiveRecord::Migration
  def self.up
    create_table :invitations do |t|
      t.string :title
      t.date :sent_on
      t.integer :event_id
      t.text :description

      t.timestamps
    end
  end

  def self.down
    drop_table :invitations
  end
end
