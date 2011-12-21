require 'rubygems'
require 'chimps'
require 'ruby-debug'

# reads configuration files
Chimps.boot!

request  = Chimps::QueryRequest.new('science/climatology/ncdc/weather/show', 
                        :query_params => { 'g.quad_key'=>'0230102', 'f.date' => '19770529' })
debugger
response = request.get
response.print
