require 'test/unit'

require "#{File.dirname(__FILE__)}/../init"

class GuildStatisticsTest < Test::Unit::TestCase
  
  def setup
    @scraped_content = File.read(File.expand_path(File.dirname(__FILE__)) + '/assets/guild.xml').to_s
    @guild = WarcraftArmory::Guild.new(nil,@scraped_content)
    @stat = @guild.statistics
  end
  
  def teardown
    # Nothing
  end

  def test_member_count
    assert_equal 457, @stat.length
    assert_equal 457, @stat.inspect
  end
  
  def test_unfiltered_members
    assert_equal @stat.members, @stat.all_members
  end
  
  def test_races
    assert_equal({:gnome => 48, :human => 115, :dwarf => 19, :draenei => 145, :nightelf => 130}, @stat.races)
  end

  def test_classes
    assert_equal({
     :deathknight=>32,
     :warrior=>39,
     :shaman=>38,
     :paladin=>50,
     :warlock=>36,
     :mage=>54,
     :hunter=>61,
     :druid=>59,
     :rogue=>36,
     :priest=>52
    }, @stat.classes)
  end

  def test_genders
    assert_equal({:female=>443, :male => 14}, @stat.genders)
  end

  def test_levels
    assert_equal([ 0, 0, 0,0,0,0,0,0, 0,0, 5,9,
                   8, 7,11,7,5,3,6,7, 9,4, 9,9,
                  16, 8, 8,6,5,2,9,5, 6,4, 5,3,
                   4, 4, 3,3,7,7,3,8, 6,0, 5,3,
                   1, 4, 5,4,3,0,1,6, 6,3,11,3,
                   8,10, 5,5,5,3,6,7, 3,3,64,8,
                   9,10, 5,3,1,1,0,1,24], @stat.levels)
  end
  
  def test_filter_single
    @stat.filter(:race => :gnome)
    assert_equal({:gnome => 48}, @stat.races)
    assert_equal(48,@stat.length)
  end

  def test_filter_array
    @stat.filter(:race => [:gnome,:dwarf])
    assert_equal({:gnome => 48, :dwarf => 19}, @stat.races)
    assert_equal(67,@stat.length)
  end
  
  def test_filter_range
    @stat.filter(:level => 60..80)
    assert_equal(181,@stat.length)
  end

  def test_filter_range_array
    @stat.filter(:level => [60..80,20..30])
    assert_equal(266,@stat.length)
  end
  
  def test_reset_filter
    @stat.filter(:race => :gnome)
    assert_equal(48,@stat.length)
    @stat.reset_filter
    assert_equal 457, @stat.length
  end
  
  def test_add_members
    @stat.filter(:race => :gnome)
    assert_equal(48,@stat.length)
    m1 = @stat.members
    @stat.reset_filter
    @stat.filter(:race => :dwarf)
    assert_equal(19,@stat.length)
    m2 = @stat.members
    
    blankStat = WarcraftArmory::GuildStatistics.new()
    
    blankStat.add_members(m1)
    blankStat.add_members(m2)
    
    assert_equal({:gnome => 48, :dwarf => 19}, blankStat.races)
    assert_equal(67,blankStat.length)
  end
  
end
