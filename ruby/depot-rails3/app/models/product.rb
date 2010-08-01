class Product < ActiveRecord::Base
  # book has this:
  # validates :title, :description, :image_url, :presense => true
  # validates :title, :uniqueness => true
  # I don't like that, I prefer this, list the field, then the validators for that field

  validates :description, :presence => true
#hrm .. numericality doesn't seem to work.. >:-|
  validates :price, :presence => true, :numericality => {:greater_then_or_equal_to => 3.00}
  validates :title, :uniqueness => true, :presence => true
  validates :image_url, 
      :presence => true,
      :format => { :with => %r{\.(gif|jpg|png)$}, 
          :message => 'must be a URL for GIF, JPG or PNG image.'}
end
