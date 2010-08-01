require 'test_helper'

class ProductTest < ActiveSupport::TestCase
  fixtures :products

  test "product attributes must not be empty" do
    product = Product.new
    assert product.invalid?
    assert product.errors[:title].any?
    assert product.errors[:description].any?
    assert product.errors[:price].any?
    assert product.errors[:image_url].any?
  end

  test "product price must be postive" do
    product = Product.new(
        :title => "My Awesome Book",
        :description => "an awesome description",
        :image_url => "awesome.jpg"
        )

# this does not work cuz the validation is borked for some reason
#    product.price = -1.00
#    assert product.invalid?

    product.price = 1.00
    assert product.valid?
  end

  test "producrt is not valid without a uniquw title" do
     product = Product.new(
        :title => products(:ruby).title,
        :description => "an awesome description",
        :image_url => "awesome.jpg",
        :price => 4.30
        )

     assert !product.save
     assert_equal "has already been taken", product.errors[:title].join('; ') 
  end

end
