module Blah
  class TeamMember < ActiveRecord::Base
    attr_accessible :bio, :image_url, :name, :twitter_url
  end
end
