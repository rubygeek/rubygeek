defmodule Portal do
  defstruct [:left, :right]
  use Application

 # See http://elixir-lang.org/docs/stable/elixir/Application.html
  # for more information on OTP Applications
  def start(_type, _args) do
    import Supervisor.Spec, warn: false

    children = [
      # Define workers and child supervisors to be supervised
      worker(Portal.Door, [])
    ]

    # See http://elixir-lang.org/docs/stable/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: Portal.Supervisor]
    Supervisor.start_link(children, opts)
  end
 
  @doc """
  Shoots a new door with the given `color`.
  """
  def shoot(color) do
    Supervisor.start_child(Portal.Supervisor, [color])
  end

  @doc """
  Starts transfering data from left to right
  """
  def transfer(left, right, data) do
    # First add all data to portal on the left
    for item <- data do
      Portal.Door.push(left, item)
    end

    %Portal{left: left, right: right}
  end

  @doc """
  Push data to the right in given portal
  """
  def push_right(portal) do
    case Portal.Door.pop(portal.left) do
      :error   -> :ok
      {:ok, h} -> Portal.Door.push(portal.right, h)
    end
    
    portal
  end

end

defimpl Inspect, for: Portal do
  def inspect(%Portal{left: left, right: right}, _) do
    left_door  = inspect(left)
    right_door = inspect(right)

    left_data  = inspect(Enum.reverse(Portal.Door.get(left)))
    right_data = inspect(Portal.Door.get(right))

    max = max(String.length(left_door), String.length(left_data))

    """
    #Portal<
      #{String.rjust(left_door, max)} <=> #{right_door}
      #{String.rjust(left_data, max)} <=> #{right_data}
    >
    """
  end
end
