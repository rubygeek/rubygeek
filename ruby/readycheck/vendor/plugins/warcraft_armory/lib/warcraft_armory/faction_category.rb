module WarcraftArmory
  class FactionCategory
    def initialize(cat,factions)
      @data = factions
      @cat = cat
    
      @name = cat["name"].to_s
    end

    def inspect
      name
    end
    
    def name
      @name
    end
    
    def factions
      @data
    end
  end
end