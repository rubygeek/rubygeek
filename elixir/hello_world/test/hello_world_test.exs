defmodule HelloWorldTest do
  use ExUnit.Case
  doctest HelloWorld

  test "hello returns hello" do
    assert HelloWorld.hello == :world
  end
end
