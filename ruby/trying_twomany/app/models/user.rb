class User < ActiveRecord::Base
  has_many :acceptances
  has_many :invitations, :through => :acceptances
end
