require 'rubygems'
require 'sinatra'
require 'dm-core'
require 'json'

DataMapper.setup(:default, "sqlite3://#{Dir.pwd}/db/friends_development.sqlite3"
)

class Friend 
    include DataMapper::Resource
  property :first_name, Text
  property :last_name, Text
  property :cell_phone, Text
  property :twitter, Text
  property :email, Text, :key => true

  def to_json(*a)
    {
      'first_name' => self.first_name,
      'last_name' => self.last_name,
      'cell_phone' => self.cell_phone,
      'twitter' => self.twitter,
      'email' => self.email
    }.to_json(*a)
  end

  def to_xml
      "<friend>" +
        "<first_name>#{first_name}</first_name>" +
        "<last_name>#{last_name}</last_name>" +
        "<cell_phone>#{cell_phone}</cell_phone>" +
        "<twitter>#{twitter}</twitter>" + 
        "<email>#{email}</email>" +
      "</friend>"
  end
end

DataMapper.auto_migrate!

# set up some sample data
f = Friend.new
f.attributes = { :first_name => 'Bob', :last_name => 'Jones', :cell_phone => '123.123.1234', :twitter => 'BobTheTurtle', :email => 'bob@bob.com' }
f.save

f = Friend.new
f.attributes = { :first_name => 'Clark', :last_name => 'Kent', :cell_phone => '312.234.6534', :twitter => 'superman', :email => 'clark@superman.com' }
f.save

f = Friend.new
f.attributes = { :first_name => 'Lois', :last_name => 'Lane', :cell_phone => '212.123.1231', :twitter => 'loislane', :email => 'lois@dailyplanet.com' }
f.save

get '/friends.json' do
  content_type 'applications/json'
#  @friends = Friend.all 
  #meh no to_xml method on collections
#  xml =  @friends.collect { |f| f.to_xml } 
#  return "<friends>#{xml}</friends>"
    { 'friends' => Array(Friend.all) }.to_json

end


