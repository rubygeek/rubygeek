defmodule ElixirWeather.WeatherTest do
  use ElixirWeather.ModelCase

  alias ElixirWeather.Weather

  @valid_attrs %{temp: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Weather.changeset(%Weather{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Weather.changeset(%Weather{}, @invalid_attrs)
    refute changeset.valid?
  end
end
