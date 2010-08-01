class FriendController < ApplicationController
  def index
   @friends = Friend.all
   render :text => @friends
  end

end
