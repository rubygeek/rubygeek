defmodule ShortenerServerTest do
  use ExUnit.Case

  setup do
    {:ok, pid} = Shortener.Server.start_link
    {:ok, pid: pid}
  end

  test "shortening a url", %{pid: pid} do
    :ok = Shortener.Server.shorten(pid, "http://apple.com", "apl")
    assert {:ok, "http://apple.com"} == Shortener.Server.url(pid, "apl")
  end

  test "finding url that doens't exist", %{pid: pid} do
    assert :error == Shortener.Server.url(pid, "apl")
  end

  test "shorten the existing alias", %{pid: pid} do
    :ok = Shortener.Server.shorten(pid, "http://apple.com", "apl")
    assert {:error, :dupalias} == Shortener.Server.shorten(pid, "http://google.com", "apl")
  end
end
