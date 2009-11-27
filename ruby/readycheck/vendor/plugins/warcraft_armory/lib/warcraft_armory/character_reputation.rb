require 'open-uri'
require "rexml/document"
require "cgi"

module WarcraftArmory
  class CharacterReputation < CharacterPart
    def self.find(location, realm, character_name)
      site = "http://#{location.to_s}.wowarmory.com"
      url = "#{site}/character-reputation.xml?r=#{CGI.escape realm}&n=#{CGI.escape character_name}"
      
      WarcraftArmory::CharacterReputation.new(site,open(url,"User-Agent" => "Mozilla/5.0 (WarcraftArmory) Firefox/3.0.2"))
    end

    def reputation(location = nil)
      self
    end
    
    def self.fetch(site,urlArgs)
      url = "#{site}/character-reputation.xml?#{urlArgs}"
      WarcraftArmory::CharacterReputation.new(site,open(url,"User-Agent" => "Mozilla/5.0 (WarcraftArmory) Firefox/3.0.2"))
    end
    
    def initialize(site,xml_or_stream)
      @doc = REXML::Document.new xml_or_stream
      
      info = REXML::XPath.first(@doc,"//characterInfo").attributes
      if (info["errCode"] != nil)
        raise info["errCode"]
      end
      
      attribs = REXML::XPath.first(@doc,"//character").attributes
      
      super(site,attribs)
    end
    
    def factions
      parse
      @factions
    end
    
    def categories
      parse
      @categories
    end
    
    private
    def parse
      return if (@parsed)
      @factions = {}
      @categories = {}
      REXML::XPath.each(@doc,"//factionCategory") do |cat|
        factions = {}
        REXML::XPath.each(cat,"faction") do |faction|
          attrs = faction.attributes
          _faction = WarcraftArmory::Faction.new(cat,attrs)
          factions[attrs["key"]] = _faction
          @factions[attrs["key"]] = _faction
        end
        attrs = cat.attributes
        @categories[attrs["key"]] = WarcraftArmory::FactionCategory.new(attrs,factions)
      end
      
      @parsed = true
    end
  end
end