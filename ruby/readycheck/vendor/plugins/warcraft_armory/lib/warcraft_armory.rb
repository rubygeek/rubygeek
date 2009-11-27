require 'warcraft_armory/character_part'
require 'warcraft_armory/character'

require 'warcraft_armory/character_reputation'

require 'warcraft_armory/guild_lite'
require 'warcraft_armory/guild'
require 'warcraft_armory/guild_statistics'

require 'warcraft_armory/faction'
require 'warcraft_armory/faction_category'

module WarcraftArmory
  def self.getRace(id)
    [nil,:human,:orc,:dwarf,:nightelf,:undead,:tauren,:gnome,:troll,nil,:bloodelf,:draenei][id]
  end
  
  def self.getRaceFaction(id)
    [nil,:alliance,:horde,:alliance,:alliance,:horde,:horde,:alliance,:horde,nil,:horde,:alliance][id]
  end

  def self.getFaction(id)
    [:alliance,:horde][id]
  end
  
  def self.getGender(id)
    [:male,:female][id]
  end
  
  def self.getClass(id)
    [nil,:warrior,:paladin,:hunter,:rogue,:priest,:deathknight,:shaman,:mage,:warlock,nil,:druid][id]
  end
  
end