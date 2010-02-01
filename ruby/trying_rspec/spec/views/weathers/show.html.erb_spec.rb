require 'spec_helper'

describe "/weathers/show.html.erb" do
  include WeathersHelper
  before(:each) do
    assigns[:weather] = @weather = stub_model(Weather,
      :zipcode => "value for zipcode",
      :city => "value for city",
      :region => "value for region",
      :temperature_high => "value for temperature_high",
      :temperature_low => "value for temperature_low",
      :temperature_units => "value for temperature_units",
      :link => "value for link"
    )
  end

  it "renders attributes in <p>" do
    render
    response.should have_text(/value\ for\ zipcode/)
    response.should have_text(/value\ for\ city/)
    response.should have_text(/value\ for\ region/)
    response.should have_text(/value\ for\ temperature_high/)
    response.should have_text(/value\ for\ temperature_low/)
    response.should have_text(/value\ for\ temperature_units/)
    response.should have_text(/value\ for\ link/)
  end
end
