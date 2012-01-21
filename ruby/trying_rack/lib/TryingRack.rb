class TryingRack
  def call(env)
    [200, {"Content-type" => "text/plain"}, ["Hello There World"]]
  end
end