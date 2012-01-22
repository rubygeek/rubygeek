class Member < ActiveRecord::Base

  acts_as_indexed :fields => [:name, :blog, :twitter, :facebook, :profile, :location]

  validates :name, :presence => true, :uniqueness => true
  
end
