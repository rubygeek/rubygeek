require File.dirname(__FILE__) + '/../spec_helper'

# Trying some other ways to write the tests, less typing and clean them up

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

# Deligation to subject
describe Weather do
  include WeatherSpecHelper
  
  subject { @weather = Weather.new(valid_weather_attributes) }
  specify { subject.should be_valid }
end

# Using Implicit Subject
describe Weather do
  include WeatherSpecHelper
    
  subject { @weather = Weather.new(valid_weather_attributes.except(:zipcode)) }
  # Dont need to use subject.should and use it instead of specify
  it { should_not be_valid }
  it { should have(1).error_on(:zipcode)}
  
end

describe Weather, ".fetch for zipcode (subject/specify blocks)" do
  include WeatherSpecHelper
  
  subject do
    zipcode = 98117
    mock_feed(zipcode,1)
    @weather = Weather.fetch_for_zipcode(zipcode)
  end
  
  # This works, but better to use the longer style since the generated
  # description just says Weather.fetch for zipcode should eql "F"
  specify { subject.temperature_units.should eql('F') }
end

describe Weather, ".fetch for zipcode (before, it blocks)"  do
  include WeatherSpecHelper
  
  before do
    zipcode = 98117
    mock_feed(zipcode,1)
    @weather = Weather.fetch_for_zipcode(zipcode)
  end

  it "should populate temperature_units" do
    @weather.temperature_units.should eql('F')
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

