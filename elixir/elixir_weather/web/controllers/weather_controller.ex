defmodule ElixirWeather.WeatherController do
  use ElixirWeather.Web, :controller

  alias ElixirWeather.Weather

  def index(conn, _params) do
    weathers = Repo.all(Weather)
    render(conn, "index.html", weathers: weathers)
  end

  def new(conn, _params) do
    changeset = Weather.changeset(%Weather{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"weather" => weather_params}) do
    changeset = Weather.changeset(%Weather{}, weather_params)

    case Repo.insert(changeset) do
      {:ok, _weather} ->
        conn
        |> put_flash(:info, "Weather created successfully.")
        |> redirect(to: weather_path(conn, :index))
      {:error, changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    weather = Repo.get!(Weather, id)
    render(conn, "show.html", weather: weather)
  end

  def edit(conn, %{"id" => id}) do
    weather = Repo.get!(Weather, id)
    changeset = Weather.changeset(weather)
    render(conn, "edit.html", weather: weather, changeset: changeset)
  end

  def update(conn, %{"id" => id, "weather" => weather_params}) do
    weather = Repo.get!(Weather, id)
    changeset = Weather.changeset(weather, weather_params)

    case Repo.update(changeset) do
      {:ok, weather} ->
        conn
        |> put_flash(:info, "Weather updated successfully.")
        |> redirect(to: weather_path(conn, :show, weather))
      {:error, changeset} ->
        render(conn, "edit.html", weather: weather, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    weather = Repo.get!(Weather, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(weather)

    conn
    |> put_flash(:info, "Weather deleted successfully.")
    |> redirect(to: weather_path(conn, :index))
  end
end
