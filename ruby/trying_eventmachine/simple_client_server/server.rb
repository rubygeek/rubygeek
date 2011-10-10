#!/usr/bin/env ruby

require 'rubygems'
require 'eventmachine'

class EchoServer <  EM::Connection

  def post_init
    puts "client connecting"
  end

  def unbind
    puts "client disconnecting"
  end

  def receive_data(data)
    puts "recieved #{data} from client"
    send_data ">> #{data}"

  end
end

EM.run do
  #dont block or sleep, send long running jobs to queue
  EM.start_server('0.0.0.0', 9000, EchoServer)
  puts "Server running on port 9000"
end
