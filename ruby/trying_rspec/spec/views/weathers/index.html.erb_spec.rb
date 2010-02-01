require 'spec_helper'

describe "/weathers/index.html.erb" do
  include WeathersHelper

  before(:each) do
    assigns[:weathers] = [
      stub_model(Weather,
        :zipcode => "value for zipcode",
        :city => "value for city",
        :region => "value for region",
        :temperature_high => "value for temperature_high",
        :temperature_low => "value for temperature_low",
        :temperature_units => "value for temperature_units",
        :link => "value for link"
      ),
      stub_model(Weather,
        :zipcode => "value for zipcode",
        :city => "value for city",
        :region => "value for region",
        :temperature_high => "value for temperature_high",
        :temperature_low => "value for temperature_low",
        :temperature_units => "value for temperature_units",
        :link => "value for link"
      )
    ]
  end

  it "renders a list of weathers" do
    render
    response.should have_tag("tr>td", "value for zipcode".to_s, 2)
    response.should have_tag("tr>td", "value for city".to_s, 2)
    response.should have_tag("tr>td", "value for region".to_s, 2)
    response.should have_tag("tr>td", "value for temperature_high".to_s, 2)
    response.should have_tag("tr>td", "value for temperature_low".to_s, 2)
    response.should have_tag("tr>td", "value for temperature_units".to_s, 2)
    response.should have_tag("tr>td", "value for link".to_s, 2)
  end
end
