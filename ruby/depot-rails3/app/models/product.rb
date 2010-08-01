class Product < ActiveRecord::Base
  default_scope :order => 'title'

  validates :title, :presence => true, :uniqueness => true

  validates :description, :presence => true

  validates :image_url,
      :presence => true,
      :format => { :with => %r{\.(gif|jpg|png)$}i, :message => 'must be a URL for GIF, JPG or PNG image.' }

  validates :price,
      :presence => true, 
      :numericality => {:greater_than_or_equal_to => 0.01}

end

