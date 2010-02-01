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
  
  class Decrease
    def initialize(&measure_proc)
      @measure_proc = measure_proc
    end

    def matches?(target)
      @original_value = @measure_proc.call
      target.call
      @new_value = @measure_proc.call
      return @new_value.to_i < @original_value.to_i
    end

    def failure_message_for_should
      "expected #{@new_value} to be less than #{@original_value}"
    end

    def failure_message_for_should_not
      "expected #{@new_value} not to be less than #{@original_value}"
    end
  end

  def decrease(&measure_proc)
    Decrease.new(&measure_proc)
  end

  class Increase
    def initialize(&measure_proc)
      @measure_proc = measure_proc
    end

    def matches?(target)
      @original_value = @measure_proc.call
      target.call
      @new_value = @measure_proc.call
      return @new_value.to_i > @original_value.to_i
    end

    def failure_message_for_should
      "expected #{@new_value} to be less than #{@original_value}"
    end

    def failure_message_for_should_not
      "expected #{@new_value} not to be less than #{@original_value}"
    end
  end

  def increase(&measure_proc)
    Increase.new(&measure_proc)
  end


end