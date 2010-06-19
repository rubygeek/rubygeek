class AddProductIdToPost < ActiveRecord::Migration
  def self.up
    add_column :posts, :product_id, :integer
  end

  def self.down
    remove_column :posts, :product_id
  end
end
