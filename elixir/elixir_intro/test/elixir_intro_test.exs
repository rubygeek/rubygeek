defmodule ElixirIntroTest do
  use ExUnit.Case

  test "double" do
    assert ElixirIntro.double(2) == 4
  end

  test "double string" do
    assert ElixirIntro.double("hello") == "hello hello"
  end

  test "double nil" do
    assert_raise RuntimeError, fn ->
      ElixirIntro.double(nil)
    end
  end

  test "an anonymous function" do
    say_hello = fn name -> "Hello! #{name}" end
    assert say_hello.("taco") == "Hello! taco"
  end

  test "an anonymous function even shorter" do
    say_hello = &"Hello! #{&1}"
    assert say_hello.("taco") == "Hello! taco"
  end


  test "String.upcase all values in list" do
    list = ["tacos", "bbq", "brussle sprouts", "garlic"]

    expected = ["TACOS", "BBQ", "BRUSSLE SPROUTS", "GARLIC"]
    assert Enum.map(list, &String.upcase(&1)), expected
  end 

end
