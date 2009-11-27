require "rexml/document"
require "cgi"

module WarcraftArmory
  class Guild < GuildLite
    def self.find(location, realm, guild_name)
      site = "http://#{location.to_s}.wowarmory.com"
      url = "#{site}/guild-info.xml?r=#{CGI.escape realm}&n=#{CGI.escape guild_name}"
      
      WarcraftArmory::Guild.new(site,open(url,"User-Agent" => "Mozilla/5.0 (WarcraftArmory) Firefox/3.0.2"))
    end

    def self.fetch(site,urlArgs)
      url = "#{site}/guild-info.xml?#{urlArgs}"
      WarcraftArmory::Guild.new(site,open(url,"User-Agent" => "Mozilla/5.0 (WarcraftArmory) Firefox/3.0.2"))
    end
    
    def initialize(site,xml_or_stream)
      @site = site
      @doc = REXML::Document.new xml_or_stream
      
      @guildKey = REXML::XPath.first(@doc,"//guildKey").attributes
      @memberCount = REXML::XPath.first(@doc,"//members/@memberCount").value.to_i
      @memberData = REXML::XPath.match(@doc,"//members/character")
    end
    
    def full_guild(location = nil)
      self
    end
    
    def inspect
      name
    end
    
    def name
      @name ||= @guildKey["name"]
    end
    
    def member_count
      @memberCount
    end
    
    def members
      @members ||= @memberData.map { |member| WarcraftArmory::Character.new(@site,member.attributes) }
    end
    
    def statistics
      WarcraftArmory::GuildStatistics.new members
    end
  end
end