defmodule ElixirWeather.Router do
  use ElixirWeather.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", ElixirWeather do
    pipe_through :browser # Use the default browser stack
    resources "/weathers", WeatherController
    get "/", WeatherController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", ElixirWeather do
  #   pipe_through :api
  # end
end
