defmodule BasicSuper do
  use Supervisor

  def start_link do
    Supervisor.start_link(__MODULE__, [])
  end

  def init([]) do
    children = [
      worker(BasicServerOne, []),
      worker(BasicServerTwo, []),
      worker(BasicServerThree, []),
      worker(BasicServerFour, []),
    ]
 
    supervise(children, strategy: :one_for_one)
  end

end
