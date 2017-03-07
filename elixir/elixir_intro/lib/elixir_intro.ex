defmodule ElixirIntro do
  def double(x) when is_integer(x) do
    2 * x
  end

  def double(x) when is_binary(x) and x != "" do
    x <> " " <> x
  end

  def double(x) when is_nil(x) do
    raise "You can't double nothing!"
  end
end



 
