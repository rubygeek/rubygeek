require 'rubygems'
require 'chimps'

# reads configuration files
Chimps.boot!

request  = Chimps::QueryRequest.new('soc/net/tw/trstrank.json', :query_params => { :screen_name => 'infochimps' } )
response = request.get
response.print
