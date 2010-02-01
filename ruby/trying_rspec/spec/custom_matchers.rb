module CustomMatchers
  
  class BeHigher
    def initialize(expected)
      @expected = expected
    end

    def matches?(actual)
      @actual = actual
      @actual <= @expected
    end

    def failure_message_for_should
      "expected #{@actual} to be higher #{@expected}, but it didn't"
    end

    def failure_message_for_should_not
      "expected #{@actual} to be higher #{@expected},  but it did"
    end
  end

  def be_higher(expected)
    BeHigher.new(expected)
  end

end