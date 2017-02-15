defmodule ShortenerBasicTest do
  use ExUnit.Case

  setup do
    {:ok, pid =  Shortener.Basic.start_link}
  end
 
  test "shortening a url", %{pid: pid} do
    send(pid, {:shorten, self(), "apl", "http://www.apple.com"})
    assert_receive :ok
    send(pid, {:url, self(), "apl"})
    assert_receive {:ok, "http://www.apple.com"}
  end
  
  test "finding a url that doesn't exist", %{pid: pid} do
    send(pid, {:url, self(), "something"})
    assert_receive :error
  end
end
