defmodule ElixirWeather.Worker do
  use GenServer

  alias ElixirWeather.Weather

  def start_link do
    GenServer.start_link(__MODULE__, %{})
  end

  def init(state) do
    schedule_work()
    {:ok, state}
  end

  def handle_info(:work, state) do
    IO.puts "Getting weather for austin" 
    Weather.store_temp("austin", "tx")
    schedule_work()
    {:no_reply, state}
  end

  defp schedule_work() do
    Process.send_after(self(), :work, 15 * 60 * 1000)
  end
  
end
