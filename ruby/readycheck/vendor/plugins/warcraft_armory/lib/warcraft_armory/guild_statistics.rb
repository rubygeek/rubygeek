module WarcraftArmory
  class GuildStatistics
    def initialize(members = [])
      @members = members
      @filtered_members = @members
    end
    
    def inspect
      @filtered_members.length
    end
    
    def members
      @filtered_members
    end
    
    def all_members
      @members
    end
    
    def add_members(foo)
      @members = @members + foo
      reset_filter
    end
    
    def races
      @races ||= build_statistic_for("race")
    end
    
    def classes
      @classes ||= build_statistic_for("class_name")
    end

    def genders
      @genders ||= build_statistic_for("gender")
    end

    def levels
      @levels ||= build_numerical_statistic_for("level",80)
    end
    
    def length
      @filtered_members.length
    end
    
    def reset_filter
      @races = nil
      @classes = nil
      @genders = nil
      @levels = nil
      @filtered_members = @members
      self
    end
    
    def filter(foo)
      @races = nil
      @classes = nil
      @genders = nil
      @levels = nil
      _whats = {:race => "race", :class => "class_name", :gender => "gender", :level => "level"}
      foo.each do |k,v|
        _what = _whats[k]
        throw "Invalid filter" if (_what == nil)
        @filtered_members = filter_members_for(_what,v)
      end
      self
    end
    
    private
    def filter_members_for(what,v)
      out = []
      @filtered_members.each do |m|
        value = m.send(what)
        keep = false
        if (v.class == Array)
          v.each do |iv|
            if (iv.class == Range)
              keep = true if (value >= iv.begin && value <= iv.end)
            else
              keep = true if (value == iv)
            end
          end
        elsif (v.class == Range)
          keep = (value >= v.begin && value <= v.end)
        else
          keep = (value == v)
        end
        out << m if (keep)
      end
      out
    end
    
    def build_statistic_for(method)
      out = {}
      @filtered_members.each do |m|
        k = m.send(method)
        out[k] = (out[k] || 0)+1
      end
      out
    end

    def build_numerical_statistic_for(method,max)
      out = []
      out[max] = 0
      @filtered_members.each do |m|
        k = m.send(method)
        out[k] = (out[k] || 0)+1
      end
      out.map { |v| v || 0 }
    end
  end
end