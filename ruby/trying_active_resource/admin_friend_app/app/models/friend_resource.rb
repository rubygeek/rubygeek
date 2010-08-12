class FriendResource < ActiveResource::Base
  self.site = "http://localhost:3001"
  self.element_name = "friend"

  def self.new_resource
    self.new(self.get(:new)) 
  end
end
