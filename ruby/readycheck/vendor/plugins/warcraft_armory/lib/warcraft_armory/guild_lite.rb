require "rexml/document"

module WarcraftArmory
  class GuildLite
    def initialize(character)
      @name = character["guildName"].to_s
      @url = character["guildUrl"].to_s
    end
    
    def full_guild(location)
      site = "http://#{location.to_s}.wowarmory.com"
      WarcraftArmory::Guild.fetch(site,@url)
    end
    
    def inspect
      name
    end
    
    def name
      @name
    end
  end
end