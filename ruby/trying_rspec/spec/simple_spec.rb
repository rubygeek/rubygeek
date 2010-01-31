class PeepCode
  
  def awesome?
    true
  end
  
  def screencasts
    ['Restful Rails', 'Capistrano Concepts', 'Textmate for rails']
  end
  
end

class Book; end

describe PeepCode do
  
  before(:each) do
    @peepcode = PeepCode.new
  end

  it "should be awesome" do
    @peepcode.should be_awesome
  end
  
  it do
    @peepcode.should_not be_an_instance_of(Book)
  end
  
  it  do
    @peepcode.should have(3).screencasts
  end
  
end