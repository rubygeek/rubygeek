class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string :user
      t.string :password
      t.string :password_confirmation
      t.boolean :admin
      t.string :email

      t.timestamps
    end
  end

  def self.down
    drop_table :users
  end
end
