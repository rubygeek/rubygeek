class InvitationsController < ApplicationController

  # GET /invitations
  # GET /invitations.xml
  def index
    if params[:event_id] 
      # For viewing particular event invitations
      @invitations = Event.find(params[:event_id]).invitations
    else 
      # For viewing all inventations
      @invitations = Invitation.all
    end
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @invitations }
    end
  end

  # GET /invitations/1
  # GET /invitations/1.xml
  def show
    @invitation = Invitation.find(params[:id])
    @event = @invitation.event.try(:name)
    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @invitation }
    end
  end

end
