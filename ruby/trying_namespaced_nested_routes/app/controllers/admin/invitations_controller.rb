class Admin::InvitationsController < ApplicationController
  before_filter :find_event, :only => [:new, :create]
  
  # GET /invitations
  # GET /invitations.xml
  def index
    if params[:event_id] 
      # For viewing particular event invitations
      @event = find_event
      @invitations = @event.invitations
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
    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @invitation }
    end
  end

  # GET /invitations/new
  # GET /invitations/new.xml
  def new
    @invitation = @event.invitations.build

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @invitation }
    end
  end

  # GET /invitations/1/edit
  def edit
    @invitation = Invitation.find(params[:id])
  end

  # POST /invitations
  # POST /invitations.xml
  def create
    @invitation = @event.invitations.build(params[:invitation])

    respond_to do |format|
      if @invitation.save
        format.html { redirect_to([:admin, @invitation], :notice => 'Invitation was successfully created.') }
        format.xml  { render :xml => @invitation, :status => :created, :location => @invitation }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @invitation.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /invitations/1
  # PUT /invitations/1.xml
  def update
    @invitation = Invitation.find(params[:id])
    
    respond_to do |format|
      if @invitation.update_attributes(params[:invitation])
        format.html { redirect_to([:admin, @invitation], :notice => 'Invitation was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @invitation.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /invitations/1
  # DELETE /invitations/1.xml
  def destroy
    @invitation = Invitation.find(params[:id])
    @invitation.destroy

    respond_to do |format|
      format.html { redirect_to(admin_invitations_url) }
      format.xml  { head :ok }
    end
  end
  
  def find_event
    return if params[:event_id].blank?
    @event = Event.find(params[:event_id])
  end
  
end
