class FriendsController < ApplicationController

  def index
    @friends = Friend.find(:all)
  end
end
