class Acceptances < ActiveRecord::Base
  has_many :users
  has_many :invitations
end
