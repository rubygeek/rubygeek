require 'rubygems'
require 'sinatra'
require 'haml'
require 'dm-core'



DataMapper.setup(:default, ENV['DATABASE_URL'] ||
    "sqlite3://#{File.join(File.dirname(__FILE__), 'tmp', 'photos.db')}")

class Photo
    include DataMapper::Resource
  property :id, Serial
  property :title, String
  property :filename, String
#  property :created_at, Datetime
#  property :updated_at, Datetime
end

# instruct DataMapper to setup your database
DataMapper.auto_upgrade!


get "/" do
  haml :index
end

get '/new' do
  haml :new
end

post '/create' do
  @photo = Photo.new(:title    => params['title'],
                    :filename => params['filename'])
  @photo.save
  redirect "/"
end
