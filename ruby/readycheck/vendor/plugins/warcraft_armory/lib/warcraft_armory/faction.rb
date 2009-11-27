module WarcraftArmory
  class Faction
    def initialize(cat,faction)
      @data = faction
      @cat = cat
    
      @name = faction["name"].to_s
    end

    def inspect
      sprintf("%s - %s - %i / %i",name,repLevel,currentRep,maxRep)
    end
    
    def name
      @name
    end
    
    def category
      @cat
    end
    
    def percent
      currentRep.to_f/maxRep.to_f
    end
    
    def fullPercent
      if rawReputation >= 0
        rawReputation.to_f / 42999.0
      else
        (rawReputation.to_f / 42000.0)
      end
    end
    
    def currentRep
      _rep = rawReputation
      if repLevelSymbol == :hated
        42000 + _rep
      elsif repLevelSymbol == :hostile
        6000 + _rep
      elsif repLevelSymbol == :unfriendly
        3000 + _rep
      elsif repLevelSymbol == :neutral
        _rep
      elsif repLevelSymbol == :friendly
        _rep - 3000
      elsif repLevelSymbol == :honored
        _rep - 9000
      elsif repLevelSymbol == :revered
        _rep - 21000
      elsif repLevelSymbol == :exalted
        _rep - 42000
      end
    end
    
    def maxRep
      if repLevelSymbol == :hated
        36000
      elsif repLevelSymbol == :hostile
        3000
      elsif repLevelSymbol == :unfriendly
        3000
      elsif repLevelSymbol == :neutral
        3000
      elsif repLevelSymbol == :friendly
        6000
      elsif repLevelSymbol == :honored
        12000
      elsif repLevelSymbol == :revered
        21000
      elsif repLevelSymbol == :exalted
        999
      end
    end
    
    def repLevel
      if repLevelSymbol == :hated
        "Hated"
      elsif repLevelSymbol == :hostile
        "Hostile"
      elsif repLevelSymbol == :unfriendly
        "Unfriendly"
      elsif repLevelSymbol == :neutral
        "Neutral"
      elsif repLevelSymbol == :friendly
        "Friendly"
      elsif repLevelSymbol == :honored
        "Honored"
      elsif repLevelSymbol == :revered
        "Revered"
      elsif repLevelSymbol == :exalted
        "Exalted"
      end
    end
    
    def repLevelSymbol
      @repLevelSymbol ||= _repLevelSymbol
    end
    
    private
    def _repLevelSymbol
      if rawReputation <= -6000
        :hated
      elsif rawReputation <= -3000
        :hostile
      elsif rawReputation <= 0
        :unfriendly
      elsif rawReputation < 3000
        :neutral
      elsif rawReputation < 9000
        :friendly
      elsif rawReputation < 21000
        :honored
      elsif rawReputation < 42000
        :revered
      else
        :exalted
      end
    end
    
    def rawReputation
      @rawReputation ||= @data["reputation"].to_i
    end
  end
end