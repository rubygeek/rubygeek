require 'spec_helper'

describe "/weathers/edit.html.erb" do
  include WeathersHelper

  before(:each) do
    assigns[:weather] = @weather = stub_model(Weather,
      :new_record? => false,
      :zipcode => "value for zipcode",
      :city => "value for city",
      :region => "value for region",
      :temperature_high => "value for temperature_high",
      :temperature_low => "value for temperature_low",
      :temperature_units => "value for temperature_units",
      :link => "value for link"
    )
  end

  it "renders the edit weather form" do
    render

    response.should have_tag("form[action=#{weather_path(@weather)}][method=post]") do
      with_tag('input#weather_zipcode[name=?]', "weather[zipcode]")
      with_tag('input#weather_city[name=?]', "weather[city]")
      with_tag('input#weather_region[name=?]', "weather[region]")
      with_tag('input#weather_temperature_high[name=?]', "weather[temperature_high]")
      with_tag('input#weather_temperature_low[name=?]', "weather[temperature_low]")
      with_tag('input#weather_temperature_units[name=?]', "weather[temperature_units]")
      with_tag('input#weather_link[name=?]', "weather[link]")
    end
  end
end
