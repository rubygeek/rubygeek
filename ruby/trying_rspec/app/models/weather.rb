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
    temperature= (item/"yweather:condition").first["temp"]
    if weather.temperature_high.nil? || (temperature.to_i > weather.temperature_high.to_i)
      weather.temperature_high = temperature
    end
    
    if weather.temperature_low.nil? || (temperature.to_i < weather.temperature_low.to_i)
      weather.temperature_low = temperature
    end
    
    weather.link = (item/:link).inner_html
    
    weather.recorded_at = Date.today
    
    weather
  end
  
end
