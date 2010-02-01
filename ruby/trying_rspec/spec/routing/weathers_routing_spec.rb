require 'spec_helper'

describe WeathersController do
  describe "routing" do
    it "recognizes and generates #index" do
      { :get => "/weathers" }.should route_to(:controller => "weathers", :action => "index")
    end

    it "recognizes and generates #new" do
      { :get => "/weathers/new" }.should route_to(:controller => "weathers", :action => "new")
    end

    it "recognizes and generates #show" do
      { :get => "/weathers/1" }.should route_to(:controller => "weathers", :action => "show", :id => "1")
    end

    it "recognizes and generates #edit" do
      { :get => "/weathers/1/edit" }.should route_to(:controller => "weathers", :action => "edit", :id => "1")
    end

    it "recognizes and generates #create" do
      { :post => "/weathers" }.should route_to(:controller => "weathers", :action => "create") 
    end

    it "recognizes and generates #update" do
      { :put => "/weathers/1" }.should route_to(:controller => "weathers", :action => "update", :id => "1") 
    end

    it "recognizes and generates #destroy" do
      { :delete => "/weathers/1" }.should route_to(:controller => "weathers", :action => "destroy", :id => "1") 
    end
  end
end
