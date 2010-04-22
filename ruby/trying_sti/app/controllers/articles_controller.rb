class ArticlesController < ApplicationController
  # GET /articles
  # GET /articles.xml
  def index
    @articles = Articles.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @articles }
    end
  end

  # GET /articles/1
  # GET /articles/1.xml
  def show
    @articles = Articles.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @articles }
    end
  end

  # GET /articles/new
  # GET /articles/new.xml
  def new
    @articles = Articles.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @articles }
    end
  end

  # GET /articles/1/edit
  def edit
    @articles = Articles.find(params[:id])
  end

  # POST /articles
  # POST /articles.xml
  def create
    @articles = Articles.new(params[:articles])

    respond_to do |format|
      if @articles.save
        flash[:notice] = 'Articles was successfully created.'
        format.html { redirect_to(@articles) }
        format.xml  { render :xml => @articles, :status => :created, :location => @articles }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @articles.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /articles/1
  # PUT /articles/1.xml
  def update
    @articles = Articles.find(params[:id])

    respond_to do |format|
      if @articles.update_attributes(params[:articles])
        flash[:notice] = 'Articles was successfully updated.'
        format.html { redirect_to(@articles) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @articles.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /articles/1
  # DELETE /articles/1.xml
  def destroy
    @articles = Articles.find(params[:id])
    @articles.destroy

    respond_to do |format|
      format.html { redirect_to(articles_url) }
      format.xml  { head :ok }
    end
  end
end
