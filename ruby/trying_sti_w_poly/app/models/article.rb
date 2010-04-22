class Article < ActiveRecord::Base
  has_many :documents, :as => :attachablee
  has_many :images
  
  accepts_nested_attributes_for :documents, :allow_destroy => true, :reject_if => lambda {  |attributes|  attributes['filename'].blank?}
end
