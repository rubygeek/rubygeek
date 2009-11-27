require 'test/unit'

require "#{File.dirname(__FILE__)}/../init"

class GuildTest < Test::Unit::TestCase
  
  def setup
    @scraped_content = File.read(File.expand_path(File.dirname(__FILE__)) + '/assets/guild.xml').to_s
    @guild = WarcraftArmory::Guild.new(nil,@scraped_content)
  end
  
  def teardown
    # Nothing
  end

  def test_guild
    assert_equal @guild,@guild.full_guild
  end
  
  def test_guild_name
    assert_equal 'Daughters OfThe Alliance', @guild.inspect
  end
  
  def test_member_count
    assert_equal 480, @guild.member_count
  end
  
  def test_members
    assert_equal 457, @guild.members.length
  end
end
