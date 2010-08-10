class Acceptances < ActiveRecord::Base
  has_many :user
  has_many :invitation
end
