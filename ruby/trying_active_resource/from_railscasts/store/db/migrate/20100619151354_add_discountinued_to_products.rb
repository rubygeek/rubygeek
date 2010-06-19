class AddDiscountinuedToProducts < ActiveRecord::Migration
  def self.up
    add_column :products, :discontinued, :false
  end

  def self.down
    remove_column :products, :discontinued
  end
end
