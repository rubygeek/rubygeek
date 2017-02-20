defmodule ElixirWeather.WeatherControllerTest do
  use ElixirWeather.ConnCase

  alias ElixirWeather.Weather
  @valid_attrs %{temp: "some content"}
  @invalid_attrs %{}

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, weather_path(conn, :index)
    assert html_response(conn, 200) =~ "Listing weathers"
  end

  test "renders form for new resources", %{conn: conn} do
    conn = get conn, weather_path(conn, :new)
    assert html_response(conn, 200) =~ "New weather"
  end

  test "creates resource and redirects when data is valid", %{conn: conn} do
    conn = post conn, weather_path(conn, :create), weather: @valid_attrs
    assert redirected_to(conn) == weather_path(conn, :index)
    assert Repo.get_by(Weather, @valid_attrs)
  end

  test "does not create resource and renders errors when data is invalid", %{conn: conn} do
    conn = post conn, weather_path(conn, :create), weather: @invalid_attrs
    assert html_response(conn, 200) =~ "New weather"
  end

  test "shows chosen resource", %{conn: conn} do
    weather = Repo.insert! %Weather{}
    conn = get conn, weather_path(conn, :show, weather)
    assert html_response(conn, 200) =~ "Show weather"
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, weather_path(conn, :show, -1)
    end
  end

  test "renders form for editing chosen resource", %{conn: conn} do
    weather = Repo.insert! %Weather{}
    conn = get conn, weather_path(conn, :edit, weather)
    assert html_response(conn, 200) =~ "Edit weather"
  end

  test "updates chosen resource and redirects when data is valid", %{conn: conn} do
    weather = Repo.insert! %Weather{}
    conn = put conn, weather_path(conn, :update, weather), weather: @valid_attrs
    assert redirected_to(conn) == weather_path(conn, :show, weather)
    assert Repo.get_by(Weather, @valid_attrs)
  end

  test "does not update chosen resource and renders errors when data is invalid", %{conn: conn} do
    weather = Repo.insert! %Weather{}
    conn = put conn, weather_path(conn, :update, weather), weather: @invalid_attrs
    assert html_response(conn, 200) =~ "Edit weather"
  end

  test "deletes chosen resource", %{conn: conn} do
    weather = Repo.insert! %Weather{}
    conn = delete conn, weather_path(conn, :delete, weather)
    assert redirected_to(conn) == weather_path(conn, :index)
    refute Repo.get(Weather, weather.id)
  end
end
