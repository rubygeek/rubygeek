# SuperApp

Watched along with: 

https://www.youtube.com/watch?v=Gdf8JXeaPjw


{:ok, super_pid} = BasicSuper.start_link

[four, three, two, one] = Supervisor.which_children(super_pid)

{_, one_pid, _, _} = one

Process.alive?(one_pid)

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed
by adding `super_app` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [{:super_app, "~> 0.1.0"}]
end
```

Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)
and published on [HexDocs](https://hexdocs.pm). Once published, the docs can
be found at [https://hexdocs.pm/super_app](https://hexdocs.pm/super_app).

