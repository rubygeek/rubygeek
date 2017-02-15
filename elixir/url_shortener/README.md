# UrlShortener

A simple use of OTP for practicing.

Following along with this video: https://www.youtube.com/watch?v=_WgrfEaAM4Y

Source code from the talk: https://github.com/rcdilorenzo/shortener

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed as:

  1. Add `url_shortener` to your list of dependencies in `mix.exs`:

    ```elixir
    def deps do
      [{:url_shortener, "~> 0.1.0"}]
    end
    ```

  2. Ensure `url_shortener` is started before your application:

    ```elixir
    def application do
      [applications: [:url_shortener]]
    end
    ```

