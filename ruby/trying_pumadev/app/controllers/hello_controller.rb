class HelloController < ApplicationController
  def greet
    render plain: "hello there"
  end
end
