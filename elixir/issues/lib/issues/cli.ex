defmodule Issues.CLI do
  @default_count 4

  @moduledoc """
    Handle the various command line parsing and dispatch to
    the various functions that end up generating a
    table of the last _n_ issues to a github project
  """

  def run(argv) do
    argv
    |> parse_args
    |> process
  end

  def process(:help) do
    IO.puts """
      usage: issues <user> <project> [ count | #{@default_count} ]
    """
    System.halt(0)
  end

  def process({user, project, _count}) do
    Issues.GithubIssues.fetch(user, project)
    |> decode_response
    |> sort_ascending
  end

  def decode_response({:ok, body}), do: body

  def decode_response({:error, error}) do
    {_, message} = List.keyfind(error, "message", 0)
    IO.posts "Error fetching from github #{message}"
    System.halt(2)
  end

  def sort_ascending( list_issues ) do
    Enum.sort list_issues, 
              fn i1, i2 -> Map.get(i1, "created_at") <= Map.get(i2, "created_at") end
  end

  @doc """
    `argv` can be -h or --help, which returns :help

    Otherwise it is a github user name, project name and (optionally) 
    the number of entries to format.
    
    Return a tuple of `{ user, project, count }` or `:help` if help was given.
  """
  def parse_args(argv) do
    parse = OptionParser.parse(argv, switches: [help: :boolean],
                                     aliases:  [h: :help])
    case parse do
      { [ help: true], _, _}
        -> :help

      { _, [ user, project, count ], _ }
        -> { user, project, String.to_integer(count) }

      { _, [ user, project ], _ }
        -> { user, project, @default_count }

       _ -> :help
    end
  end
end
