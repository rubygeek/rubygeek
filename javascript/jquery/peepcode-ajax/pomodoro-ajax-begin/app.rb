require "rubygems"
require "sinatra"
require "haml"
require "json"

before do
  if request.xhr?
    # Fake slow network connection for Ajax requests
    sleep 2
  end
end

get "/" do
  haml :index
end

get "/report.html" do
   haml :report, :layout => false
end

post "/sessions" do
  if params[:username].downcase == "a" && params[:password].downcase == "a"
    # NOTE: A full-featured app would store the login in a database.
    content_type "application/json"
    return ["ok"].to_json
  else
    error 401, "Login Failed"
  end
end

post "/timers.json" do
  puts request.body.read.to_s
  content_type "application/json"
  return ["ok"].to_json
end

