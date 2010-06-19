class Post < ActiveRecord::Base
  def product
    @product ||= Product.find(product_id) unless product_id.blank?
  end
end
