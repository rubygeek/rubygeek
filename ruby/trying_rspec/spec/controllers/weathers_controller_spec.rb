require 'spec_helper'

describe WeathersController do

  def mock_weather(stubs={})
    @mock_weather ||= mock_model(Weather, stubs)
  end

  describe "GET index" do
    it "assigns all weathers as @weathers" do
      Weather.stub!(:find).with(:all).and_return([mock_weather])
      get :index
      assigns[:weathers].should == [mock_weather]
    end
  end

  describe "GET show" do
    it "assigns the requested weather as @weather" do
      Weather.stub!(:find).with("37").and_return(mock_weather)
      get :show, :id => "37"
      assigns[:weather].should equal(mock_weather)
    end
  end

  describe "GET new" do
    it "assigns a new weather as @weather" do
      Weather.stub!(:new).and_return(mock_weather)
      get :new
      assigns[:weather].should equal(mock_weather)
    end
  end

  describe "GET edit" do
    it "assigns the requested weather as @weather" do
      Weather.stub!(:find).with("37").and_return(mock_weather)
      get :edit, :id => "37"
      assigns[:weather].should equal(mock_weather)
    end
  end

  describe "POST create" do
  
    before do
      @weather = mock_model(Weather, :to_param => "1", :save => true)
      Weather.stub!(:fetch_for_zipcode).and_return(@weather)
      @params = { :zipcode => '98117'}
    end
    
    describe "with valid params" do
  
      it "assigns a newly created weather as @weather" do
        Weather.should_receive(:fetch_for_zipcode).with(@params[:zipcode]).and_return(@weather)
        post :create, :weather => @params
        assigns[:weather].should equal(@weather)
      end

      it "redirects to the created weather" do
        Weather.should_receive(:fetch_for_zipcode).with(@params[:zipcode]).and_return(@weather)
        post :create, :weather => @params
        response.should redirect_to(weather_url(@weather))
      end
    end

    describe "with invalid params" do
      it "assigns a newly created but unsaved weather as @weather" do
        Weather.should_receive(:fetch_for_zipcode).with({nil}).and_return(@weather)
        post :create, :weather => {nil}
        assigns[:weather].should equal(@weather)
      end

      it "re-renders the 'new' template" do
        Weather.stub!(:new).and_return(mock_weather(:save => false))
        post :create, :weather => {}
        response.should render_template('new')
      end
    end

  end

  describe "PUT update" do

    describe "with valid params" do
      it "updates the requested weather" do
        Weather.should_receive(:find).with("37").and_return(mock_weather)
        mock_weather.should_receive(:update_attributes).with({'these' => 'params'})
        put :update, :id => "37", :weather => {:these => 'params'}
      end

      it "assigns the requested weather as @weather" do
        Weather.stub!(:find).and_return(mock_weather(:update_attributes => true))
        put :update, :id => "1"
        assigns[:weather].should equal(mock_weather)
      end

      it "redirects to the weather" do
        Weather.stub!(:find).and_return(mock_weather(:update_attributes => true))
        put :update, :id => "1"
        response.should redirect_to(weather_url(mock_weather))
      end
    end

    describe "with invalid params" do
      it "updates the requested weather" do
        Weather.should_receive(:find).with("37").and_return(mock_weather)
        mock_weather.should_receive(:update_attributes).with({'these' => 'params'})
        put :update, :id => "37", :weather => {:these => 'params'}
      end

      it "assigns the weather as @weather" do
        Weather.stub!(:find).and_return(mock_weather(:update_attributes => false))
        put :update, :id => "1"
        assigns[:weather].should equal(mock_weather)
      end

      it "re-renders the 'edit' template" do
        Weather.stub!(:find).and_return(mock_weather(:update_attributes => false))
        put :update, :id => "1"
        response.should render_template('edit')
      end
    end

  end

  describe "DELETE destroy" do
    it "destroys the requested weather" do
      Weather.should_receive(:find).with("37").and_return(mock_weather)
      mock_weather.should_receive(:destroy)
      delete :destroy, :id => "37"
    end

    it "redirects to the weathers list" do
      Weather.stub!(:find).and_return(mock_weather(:destroy => true))
      delete :destroy, :id => "1"
      response.should redirect_to(weathers_url)
    end
  end

end
