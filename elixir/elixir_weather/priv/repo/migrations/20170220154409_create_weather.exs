defmodule ElixirWeather.Repo.Migrations.CreateWeather do
  use Ecto.Migration

  def change do
    create table(:weathers) do
      add :temp, :string

      timestamps()
    end

  end
end
