require 'spec_helper'

describe PostsController do
  
  def mock_post(stubs = {})
    @mock_post ||= mock_model(Post, stubs)
  end 

  describe 'GET index' do
    it "assigns posts to @posts" do
      Post.should_receive(:find).with(:all).and_return([mock_post])
      get :index
      assigns[:posts].should == [mock_post]
    end
  end

  describe 'GET show' do
    it "assigns requested post to @post" do
      Post.should_receive(:find).with("1").and_return(mock_post)
      get :show, :id => 1
      assigns[:post].should == mock_post
    end
  end

  describe 'GET new' do
    it 'assigns a new post as @post' do
      Post.should_receive(:new).and_return(mock_post)
      get :new
      assigns[:post].should == mock_post
    end
  end

  describe 'GET edit' do
    it 'assigns the requested post to edit to @post' do
      Post.should_receive(:find).with("1").and_return(mock_post)
      get :edit, :id => 1 
      assigns[:post].should == mock_post
    end
  end
  
end