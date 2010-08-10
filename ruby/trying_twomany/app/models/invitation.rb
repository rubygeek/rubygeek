class Invitation < ActiveRecord::Base
  has_many :acceptances
  has_many :users, :through => :acceptances
end
