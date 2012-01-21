require 'TryingRack'

use Rack::Reloader, 0

run TryingRack.new
