require "warcraft_armory"

class Character < ActiveRecord::Base
  belongs_to :user
  
  def after_create
    char = WarcraftArmory::Character.find(:us, 'Baelgun', self.character_name  )
    self.character_level = char.level
    self.character_class = char.class_name
    self.character_profession1_name = char.profession1_name
    self.character_profession2_name = char.profession2_name
    self.character_profession1_level = char.profession1_level
    self.character_profession2_level = char.profession2_level
    spec1 = char.talent_spec1
    spec2 = char.talent_spec2
    if spec1[:name] != "n/a"
        self.character_spec1_name = spec1[:name]
        self.character_spec1_tree = spec1[:tree]
    end
    if spec2[:name] != "n/a"
       self.character_spec2_name = spec2[:name]
       self.character_spec2_tree = spec2[:tree]
    end    
    self.save 
  end   
  
end
  