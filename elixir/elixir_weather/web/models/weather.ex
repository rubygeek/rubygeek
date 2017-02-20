defmodule ElixirWeather.Weather do
  use ElixirWeather.Web, :model
  alias ElixirWeather.Repo

  @client_key "6247edb222be5475"

  schema "weathers" do
    field :temp, :string

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:temp])
    |> validate_required([:temp])
  end

  def fetch(city, state) do
    case HTTPoison.get "http://api.wunderground.com/api/#{@client_key}/conditions/q/#{state}/#{city}.json" do
      {:ok, response} ->
        Poison.decode!(response.body)["current_observation"]
      _ -> 
        IO.puts("WTFBBQ something is wrong")
    end
  end
  
  def store_temp(city, state) do
    temp_f = fetch(city, state)["temp_f"]
    temp_str = Float.to_string(temp_f)
    Repo.insert(changeset(%ElixirWeather.Weather{}, %{temp: temp_str}))
  end  
end
