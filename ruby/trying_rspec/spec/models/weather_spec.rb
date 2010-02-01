require File.dirname(__FILE__) + '/../spec_helper'

module WeatherSpecHelper
  
  def valid_weather_attributes
    {
      :zipcode => "11111"
    }
  end
  
  def mock_feed(zipcode, numberOfTimes)
      xml = File.read(RAILS_ROOT + "/spec/fixtures/feeds/feed_for_98117.xml")
      Weather.should_receive(:open).exactly(numberOfTimes).times.
        with("http://weather.yahooapis.com/forecastrss?w=2502265").
        and_return(xml)
  end
  
  
end


describe Weather do
  include WeatherSpecHelper
  
  before(:each) do
    @weather = Weather.new
  end
  
  it "should be valid" do
    @weather.attributes = valid_weather_attributes
    @weather.should be_valid
  end
  
  it "should have 1 error on zipcode" do
    @weather.attributes = valid_weather_attributes.except(:zipcode)
    @weather.should have(1).error_on(:zipcode)
  end
  
end

describe Weather, ".fetch for zipcode" do
  include WeatherSpecHelper
  
  before do
    zipcode = 98117
    mock_feed(zipcode,1)
    @weather = Weather.fetch_for_zipcode(zipcode)
  end
  
  it "should populate temperature_units" do
    @weather.temperature_units.should eql('F')
  end
  
  it "should populate recorded_at" do
    @weather.recorded_at.to_s eql(Date.today.to_s)
  end
  
  it "should populate city and region" do
    @weather.city.should eql("Seattle")
    @weather.region.should eql("WA")
  end
  
  it "should populate zipcode" do
    @weather.zipcode.should eql(98117)
  end
  
  it "should populate temperature_high" do
    @weather.temperature_high.should eql("53")
  end
  
  it "should populate temperature_low" do
    @weather.temperature_high.should eql("53")
  end
  
  it "should populate link" do
    @weather.link.should match(/yahoo/)
  end
    
end


describe Weather, ".fetch_for_zipcode with existing record" do
    include WeatherSpecHelper
    
  before do
    zipcode = 98117
    mock_feed(zipcode,2)
    @weather = Weather.fetch_for_zipcode(98117)
  end

  it "should not create a new record if already exists" do
    @weather.save
    lambda { 
      Weather.fetch_for_zipcode(98117).save
       }.should_not change(Weather, :count)
  end
  
  it "should not overwrite existing temperature_high if greater" do
    @weather.temperature_high = @weather.temperature_high.to_i + 10
    @weather.save
    lambda {
      @weather = Weather.fetch_for_zipcode(98117)
    }.should_not decrease { @weather.temperature_high }
  end 
  
  it "should not overwrite existing temperature_low if lower" do
    @weather.temperature_high = @weather.temperature_low.to_i - 10
    @weather.save
    lambda {
      @weather = Weather.fetch_for_zipcode(98117)
    }.should_not increase { @weather.temperature_low }
  end
  
  it "should not overwrite record for previous recorded_at date" do
    @weather.recorded_at = 7.days.ago
    @weather.save
    lambda { 
      Weather.fetch_for_zipcode(98117).save
       }.should change(Weather, :count)
  end
  
end
