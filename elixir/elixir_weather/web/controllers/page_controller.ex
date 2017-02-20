defmodule ElixirWeather.PageController do
  use ElixirWeather.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
