require 'hpricot'
require 'open-uri'

class Weather < ActiveRecord::Base

  validates_presence_of :zipcode

  def self.fetch_for_zipcode(_zipcode, _recorded_at = Date.today)
    weather = self.find_or_initialize_by_zipcode_and_recorded_at(_zipcode, _recorded_at)
    url = "http://weather.yahooapis.com/forecastrss?w=2502265"
    doc = Hpricot.XML(open(url))
    
    weather.temperature_units = (doc/"yweather:units").first['temperature']
    loc = (doc/"yweather:location").first
    weather.city = loc['city']
    weather.region = loc['region']
    
    item = (doc/:item).first
    weather.temperature_high = (item/"yweather:condition").first["temp"]
    weather.temperature_high = (item/"yweather:condition").first["temp"]
    
    weather.link = (item/:link).inner_html
    
    weather.recorded_at = Date.today
    
    weather
  end
  
end
