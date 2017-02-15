defmodule HelloWorldTest do
  use ExUnit.Case
  doctest HelloWorld

  test "hello returns hellow" do
    assert HelloWorld.hello == :world
  end
end
