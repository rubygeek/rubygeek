class FriendsController < ApplicationController
  def index
  end

  def new
    @friend = FriendResource.new
  end

  def create
    @friend = FriendResource.new(params[:friend])

    respond_to do |format|
      if @friend.save 
        format.html { redirect_to(@friend, :notice => "friend created") }
      else
        format.html { :render :action => 'new' }
      end
    end

  end

end
