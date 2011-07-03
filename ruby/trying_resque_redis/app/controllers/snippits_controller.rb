require "net/http"

class SnippitsController < ApplicationController
  # GET /snippits
  # GET /snippits.xml
  def index
    @snippits = Snippit.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @snippits }
    end
  end

  # GET /snippits/1
  # GET /snippits/1.xml
  def show
    @snippit = Snippit.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @snippit }
    end
  end

  # GET /snippits/new
  # GET /snippits/new.xml
  def new
    @snippit = Snippit.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @snippit }
    end
  end

  # GET /snippits/1/edit
  def edit
    @snippit = Snippit.find(params[:id])
  end

  # POST /snippits
  # POST /snippits.xml
  def create
    @snippit = Snippit.new(params[:snippit])
    if @snippit.save
      Resque.enqueue(SnippitHighlighter, @snippit.id)
      redirect_to @snippit, :notice => "Successfully created snippit"
    else
      render :new 
    end
  end

  # PUT /snippits/1
  # PUT /snippits/1.xml
  def update
    @snippit = Snippit.find(params[:id])

    respond_to do |format|
      if @snippit.update_attributes(params[:snippit])
        format.html { redirect_to(@snippit, :notice => 'Snippit was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @snippit.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /snippits/1
  # DELETE /snippits/1.xml
  def destroy
    @snippit = Snippit.find(params[:id])
    @snippit.destroy

    respond_to do |format|
      format.html { redirect_to(snippits_url) }
      format.xml  { head :ok }
    end
  end
end
