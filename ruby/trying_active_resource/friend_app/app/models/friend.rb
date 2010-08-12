class Friend < ActiveRecord::Base

  validates_presence_of :name
  validates_presence_of :twitter
  
end
