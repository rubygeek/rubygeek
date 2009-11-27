require 'open-uri'
require "rexml/document"
require "cgi"

module WarcraftArmory
  class Character < CharacterPart
    def self.find(location, realm, character_name)
      site = "http://#{location.to_s}.wowarmory.com"
      url = "#{site}/character-sheet.xml?r=#{CGI.escape realm}&n=#{CGI.escape character_name}"
      
      WarcraftArmory::Character.new(site,open(url,"User-Agent" => "Mozilla/5.0 (WarcraftArmory) Firefox/3.0.2"))
    end

    def self.fetch(site,urlArgs)
      url = "#{site}/character-sheet.xml?#{urlArgs}"
      WarcraftArmory::Character.new(site,open(url,"User-Agent" => "Mozilla/5.0 (WarcraftArmory) Firefox/3.0.2"))
    end
    
    def initialize(site,xml_or_stream)
      if (xml_or_stream.class == Hash)
        @lite = true
        super(site,xml_or_stream)
      elsif (xml_or_stream.class == REXML::Attributes)
          @lite = true
          super(site,xml_or_stream)
      else
        @doc = REXML::Document.new xml_or_stream
        
        info = REXML::XPath.first(@doc,"//characterInfo").attributes
        if (info["errCode"] != nil)
          raise info["errCode"]
        end
        
        attribs = REXML::XPath.first(@doc,"//character").attributes
        @lite = false
        
        super(site,attribs)
      end
    end
    
    def inspect
      full_name
    end
    
    def current_title_format
      if (@lite)
        "%s"
      else
        @current_title_format ||= (REXML::XPath.first(@doc,"//title/@value") || "%s").to_s
      end
    end
    
    def title_formats
      if (@lite)
        []
      else
        @title_formats ||= _title_formats
      end
    end
    
    def titles
      title_formats.map { |x| sprintf(x,name) }
    end
    
    def full_name
      if (@lite)
        name
      else
        @full_name ||= sprintf(current_title_format,name)
      end
    end
    
    def name
      @name ||= @character["name"]
    end
    
    def faction
      @faction ||= WarcraftArmory.getFaction(@character["factionId"].to_i)
    end
    
    def level
      @level ||= @character["level"].to_i
    end
    
    def race
      @race ||= WarcraftArmory.getRace(@character["raceId"].to_i)
    end
    
    def gender
      @gender ||= WarcraftArmory.getGender(@character["genderId"].to_i)
    end
    
    def class_name
      @class ||= WarcraftArmory.getClass(@character["classId"].to_i)
    end
    
    def profession1_name
      node = REXML::XPath.first(@doc,"//professions/skill[1]").attributes
      @profession1_name = node["name"]
    end
  
    def profession1_level
      node = REXML::XPath.first(@doc,"//professions/skill[1]").attributes
      @profession1_level = node["value"].to_i
    end  
    
    def profession2_name
      node = REXML::XPath.first(@doc,"//professions/skill[2]").attributes
      @profession2_name = node["name"]
    end
  
    def profession2_level
      node = REXML::XPath.first(@doc,"//professions/skill[2]").attributes
      @profession2_level = node["value"].to_i
    end
    
    def talent_spec1
      tree = REXML::XPath.first(@doc,"//talentSpecs/talentSpec[1]") 
      spec = {}
      if (!tree) 
         spec[:name] = 'n/a'
      else
         node = tree.attributes        
         spec[:name] =  node["prim"]
         spec[:tree] = "#{node['treeOne']}/#{node['treeTwo']}/#{node['treeThree']}" 
      end
      spec  
    end
       
    def talent_spec2
      spec = {}
      tree = REXML::XPath.first(@doc,"//talentSpecs/talentSpec[2]")
      if (!tree) 
         spec[:name] = 'n/a'
      else
         node = tree.attributes  
         spec[:name] = node["prim"]
         spec[:tree] = "#{node['treeOne']}/#{node['treeTwo']}/#{node['treeThree']}" 
      end
      spec  
    end       
          
    def guild
      if (@lite)
        nil
      else
        @guild ||= _guild
      end
    end

    def full_character(location = nil)
      if (@lite)
        @site ||= "http://#{location.to_s}.wowarmory.com"
        
        url = "#{@site}/character-sheet.xml?#{urlSuffix}"
        stuff = open(url,"User-Agent" => "Mozilla/5.0 (WarcraftArmory) Firefox/3.0.2")
        
        @doc = REXML::Document.new stuff
        
        info = REXML::XPath.first(@doc,"//characterInfo").attributes
        if (info["errCode"] != nil)
          raise info["errCode"]
        end
        
        @character = REXML::XPath.first(@doc,"//character").attributes
        @lite = false
      end
      self
    end
    
    private
    def _title_formats
      tf = REXML::XPath.match(@doc,"//knownTitles/title/@value").map { |x| x.to_s }
      tf << current_title_format if (current_title_format)
      tf.sort
    end
    
    def _guild
      if (@character["guildName"] == nil)
        nil
      elsif (@site)
        WarcraftArmory::Guild.fetch(@site,@character['guildUrl'])
      else
        WarcraftArmory::GuildLite.new(@character)
      end
    end
  end
end   