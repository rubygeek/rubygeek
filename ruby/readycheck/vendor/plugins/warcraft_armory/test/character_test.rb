require 'test/unit'

require "#{File.dirname(__FILE__)}/../init"

class CharacterTest < Test::Unit::TestCase
  
  def setup
    @scraped_content = File.read(File.expand_path(File.dirname(__FILE__)) + '/assets/character.xml').to_s
    @character = WarcraftArmory::Character.new(nil,@scraped_content)
  end
  
  def teardown
    # Nothing
  end

  def test_character
    assert_equal @character,@character.full_character
  end
  
  def test_character_name
    assert_equal 'Crindappy', @character.name
  end
  
  def test_character_title
    assert_equal 'Crindappy the Hallowed', @character.inspect
    assert_equal '%s the Hallowed', @character.current_title_format
  end
  
  def test_character_titles
    assert_equal ["%s the Explorer", "%s the Hallowed", "%s, Champion of the Naaru", "Corporal %s"],@character.title_formats
    assert_equal ["Crindappy the Explorer", "Crindappy the Hallowed", "Crindappy, Champion of the Naaru", "Corporal Crindappy"],@character.titles
  end
  
  def test_character_level
    assert_equal 80, @character.level
  end

  def test_character_faction
    assert_equal :alliance, @character.faction
  end
  
  def test_character_race
    assert_equal :gnome, @character.race
  end

  def test_character_gender
    assert_equal :female, @character.gender
  end
  
  def test_character_guild
    assert_equal "Daughters OfThe Alliance",@character.guild.inspect
  end
  
  def test_character_class
    assert_equal :warlock, @character.class_name
  end
  
  def test_character_profession1_name
    assert_equal 'Herbalism', @character.profession1_name
  end
  
  def test_character_profession1_level
    assert_equal 450, @character.profession1_level
  end  

  def test_character_profession2_name
    assert_equal 'Tailoring', @character.profession2_name
  end
  
  def test_character_profession2_level
    assert_equal 444, @character.profession2_level
  end
  
  def test_character_spec1
    spec = @character.talent_spec1
    assert_equal "Affliction", spec[:name]
    assert_equal "54/0/17", spec[:tree]
  end
  
end
