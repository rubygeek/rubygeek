#!/usr/bin/env ruby

require 'rubygems'
require 'sinatra'
require 'dm-core'
require 'json'

# connect datamapper to local sqlite file

DataMapper.setup(:default, ENV['DATABASE_URL'] ||
    "sqlite3://#{File.join(File.dirname(__FILE__), 'tmp', 'tasks.db')}")

class Task
    include DataMapper::Resource
    
    property :id, Serial
    property :description, Text, :required => true
    property :is_done, Boolean
    
    #helper method returns the url for task based on id
    
    def url
      "/tasks/#{self.id}"
    end
    
    def to_json(*a) 
      {
        'guid' => self.url,
        'description' => self.description,
        'isDone' => self.is_done
      }.to_json(*a)
    end
    
    # keys that MUST be found in json
    REQUIRED = [:description, :is_done]
    
    # ensure that json is safe. if invalid json is received return nil
    def self.parse_json(body)
      json = JSON.parse(body)
      ret = {:description => json['description'], :is_done => json['is_done']}
      return nil if REQUIRED.find{ |r| ret[r].nil? }
      ret
    end
  end
  
  # instruct DataMapper to setup your database
  DataMapper.auto_upgrade!

  # return list of all  installed task
  
  get '/tasks' do
    content_type 'applications/json'
    { 'content' => Array(Task.all) }.to_json
  end
  
  post '/tasks' do
    opts = Task.parse_json(request.body.read) rescue nil
    halt(401, 'Invalid Format') if opts.nil?
    
    task = Task.new(opts)
    halt(500, 'Could not save task') unless task.save
    
    response['Location'] = task.url
    response.status = 201
  end
  
  get "/tasks/:id" do
    task = Task.get(params[:id]) rescue nil
    halt(404, 'Not Found') if task.nil?
    
    content_type 'application/json'
    { 'content' => task }.to_json
  end
  
  put "/tasks/:id" do
    task = Task.get(params[:id]) rescue nil
    halt(404, 'Not Found') if task.nil?
    
    opts = Task.parse_json(request.body.read)
    halt(401, 'Invalid Format') if opts.nil?
    
    task.description = opts[:description]
    task.is_done = opts[:is_done]
    task.save
    
    response['Content-Type'] = 'application/json'
    {'content' => task }.to_json
  end
  
  delete 'tasks/:id' do 
    task = Task.get(params[:id]) rescue nil
    task.destroy unless task.nil?
  end