defmodule BasicServerOne do
  use GenServer 

  def start_link do
    IO.puts "Basic 1 is starting"
    GenServer.start_link(__MODULE__, [])
  end
end
