module CustomMatchers
  
  def be_higher(temp)
    simple_matcher("should not be higher than #{temp}") { |actual| 
      actual <= temp }
  end
  
end