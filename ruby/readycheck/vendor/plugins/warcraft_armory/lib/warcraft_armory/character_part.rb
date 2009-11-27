module WarcraftArmory
  class CharacterPart
    def initialize(site,attributes)
      @site = site
      
      @character = attributes
      
      @other_parts = {}
      _setBits(self)
    end
    
    def reputation(location = nil)
      @site ||= "http://#{location.to_s}.wowarmory.com"
      @other_parts[:reputation] ||= WarcraftArmory::CharacterReputation.fetch(@site,urlSuffix)
      @other_parts[:reputation]._setBits(self)
      @other_parts[:reputation]
    end
    
    def character(location = nil)
      @site ||= "http://#{location.to_s}.wowarmory.com"
      @other_parts[:character] ||= WarcraftArmory::Character.fetch(@site,urlSuffix)
      @other_parts[:character]._setBits(self)
      @other_parts[:character]
    end
    
    def urlSuffix
      @urlSuffix ||= (@character["url"] || @character["charUrl"])
    end
    
    protected
    def _setBits(what)
      @other_parts = what._otherParts
      @other_parts[:character] = what if (what.class == WarcraftArmory::Character)
      @other_parts[:reputation] = what if (what.class == WarcraftArmory::CharacterReputation)
    end
    
    def _otherParts
      @other_parts
    end
  end
end