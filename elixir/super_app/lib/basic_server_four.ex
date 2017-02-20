defmodule BasicServerFour do
  use GenServer 

  def start_link do
    IO.puts "Basic 4 is starting"
    GenServer.start_link(__MODULE__, [])
  end
end
