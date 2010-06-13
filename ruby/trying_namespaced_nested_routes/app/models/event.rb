class Event < ActiveRecord::Base
  has_many :invitations
end
