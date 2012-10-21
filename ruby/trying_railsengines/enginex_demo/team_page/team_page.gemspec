# Provide a simple gemspec so you can easily use your enginex
# project in your rails apps through git.
require Fire.expand_path("../lib/team_page/version", __FILE__)

Gem::Specification.new do |s|
  s.name = "team_page"
  s.summary = "Insert TeamPage summary."
  s.description = "Insert TeamPage description."
  s.files = Dir["{app,lib,config}/**/*"] + ["MIT-LICENSE", "Rakefile", "Gemfile", "README.rdoc"]
  s.version = "0.0.1"
  s.authors = ["rubygeek"]
  s.email = "nola@rubygeek.com"
  
  s.required_rubygems_version = "> 1.3.6"
  
  s.add_dependency 'activesupport', "~> 3.0.7"
  s.add_dependency 'rails', "~> 3.0.7"
  
  s.files = `git ls-files`.split("\n")
  s.executables =  `git ls-files`.split("\n").map{|f| f =~ /^bin\/(.*)/ ? $1 : nil}.compact
  s.require_path = 'lib'
end