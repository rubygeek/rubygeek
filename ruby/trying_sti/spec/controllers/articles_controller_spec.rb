require 'spec_helper'

describe ArticlesController do

  def mock_articles(stubs={})
    @mock_articles ||= mock_model(Articles, stubs)
  end

  describe "GET index" do
    it "assigns all articles as @articles" do
      Articles.stub(:find).with(:all).and_return([mock_articles])
      get :index
      assigns[:articles].should == [mock_articles]
    end
  end

  describe "GET show" do
    it "assigns the requested articles as @articles" do
      Articles.stub(:find).with("37").and_return(mock_articles)
      get :show, :id => "37"
      assigns[:articles].should equal(mock_articles)
    end
  end

  describe "GET new" do
    it "assigns a new articles as @articles" do
      Articles.stub(:new).and_return(mock_articles)
      get :new
      assigns[:articles].should equal(mock_articles)
    end
  end

  describe "GET edit" do
    it "assigns the requested articles as @articles" do
      Articles.stub(:find).with("37").and_return(mock_articles)
      get :edit, :id => "37"
      assigns[:articles].should equal(mock_articles)
    end
  end

  describe "POST create" do

    describe "with valid params" do
      it "assigns a newly created articles as @articles" do
        Articles.stub(:new).with({'these' => 'params'}).and_return(mock_articles(:save => true))
        post :create, :articles => {:these => 'params'}
        assigns[:articles].should equal(mock_articles)
      end

      it "redirects to the created articles" do
        Articles.stub(:new).and_return(mock_articles(:save => true))
        post :create, :articles => {}
        response.should redirect_to(article_url(mock_articles))
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved articles as @articles" do
        Articles.stub(:new).with({'these' => 'params'}).and_return(mock_articles(:save => false))
        post :create, :articles => {:these => 'params'}
        assigns[:articles].should equal(mock_articles)
      end

      it "re-renders the 'new' template" do
        Articles.stub(:new).and_return(mock_articles(:save => false))
        post :create, :articles => {}
        response.should render_template('new')
      end
    end

  end

  describe "PUT update" do

    describe "with valid params" do
      it "updates the requested articles" do
        Articles.should_receive(:find).with("37").and_return(mock_articles)
        mock_articles.should_receive(:update_attributes).with({'these' => 'params'})
        put :update, :id => "37", :articles => {:these => 'params'}
      end

      it "assigns the requested articles as @articles" do
        Articles.stub(:find).and_return(mock_articles(:update_attributes => true))
        put :update, :id => "1"
        assigns[:articles].should equal(mock_articles)
      end

      it "redirects to the articles" do
        Articles.stub(:find).and_return(mock_articles(:update_attributes => true))
        put :update, :id => "1"
        response.should redirect_to(article_url(mock_articles))
      end
    end

    describe "with invalid params" do
      it "updates the requested articles" do
        Articles.should_receive(:find).with("37").and_return(mock_articles)
        mock_articles.should_receive(:update_attributes).with({'these' => 'params'})
        put :update, :id => "37", :articles => {:these => 'params'}
      end

      it "assigns the articles as @articles" do
        Articles.stub(:find).and_return(mock_articles(:update_attributes => false))
        put :update, :id => "1"
        assigns[:articles].should equal(mock_articles)
      end

      it "re-renders the 'edit' template" do
        Articles.stub(:find).and_return(mock_articles(:update_attributes => false))
        put :update, :id => "1"
        response.should render_template('edit')
      end
    end

  end

  describe "DELETE destroy" do
    it "destroys the requested articles" do
      Articles.should_receive(:find).with("37").and_return(mock_articles)
      mock_articles.should_receive(:destroy)
      delete :destroy, :id => "37"
    end

    it "redirects to the articles list" do
      Articles.stub(:find).and_return(mock_articles(:destroy => true))
      delete :destroy, :id => "1"
      response.should redirect_to(articles_url)
    end
  end

end
