require "active_support/dependencies"

module TeamPage
  mattr_accessor :app_root
  
  def self.setup
    yield self
  end
end

require "team_page/engine"
