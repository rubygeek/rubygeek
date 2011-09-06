require 'ray'

Ray.game "Hello world!" do
  register { add_hook :quit, method(:exit!) }

  scene :hello do
    @text = text "Hello world!", :angle => 30, :at => [100, 100], :size => 30
    render { |win| win.draw @text }
  end

  scenes << :hello
end
