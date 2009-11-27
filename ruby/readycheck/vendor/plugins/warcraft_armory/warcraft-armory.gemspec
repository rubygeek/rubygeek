# -*- encoding: utf-8 -*-

Gem::Specification.new do |s|
  s.name = %q{warcraft-armory}
  s.version = "0.0.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 1.2") if s.respond_to? :required_rubygems_version=
  s.authors = ["Andrea Nall"]
  s.date = %q{2008-12-16}
  s.description = %q{Retrieve character information from the World of Warcraft Armory}
  s.email = %q{anall@andreanall.com}
  s.extra_rdoc_files = ["lib/warcraft_armory/character.rb", "lib/warcraft_armory/character_part.rb", "lib/warcraft_armory/character_reputation.rb", "lib/warcraft_armory/guild.rb", "lib/warcraft_armory/guild_lite.rb", "lib/warcraft_armory/guild_statistics.rb", "lib/warcraft_armory.rb", "lib/warcraft_armory_test_hacks.rb", "lib/warcraft_armory/faction.rb", "lib/warcraft_armory/faction_category.rb", "LICENSE", "README.textile"]
  s.files = ["Changelog", "init.rb", "lib/warcraft_armory/character.rb", "lib/warcraft_armory/character_part.rb", "lib/warcraft_armory/character_reputation.rb", "lib/warcraft_armory/guild.rb", "lib/warcraft_armory/guild_lite.rb", "lib/warcraft_armory/guild_statistics.rb", "lib/warcraft_armory.rb", "lib/warcraft_armory_test_hacks.rb", "lib/warcraft_armory/faction.rb", "lib/warcraft_armory/faction_category.rb", "LICENSE", "Rakefile", "README.textile", "test/assets/character.xml", "test/assets/guild.xml", "test/character_test.rb", "test/guild_test.rb", "warcraft-armory.gemspec"]
  s.has_rdoc = true
  s.homepage = %q{http://github.com/anall/warcraft-armory}
  s.rdoc_options = ["--line-numbers", "--inline-source", "--title", "Warcraft-armory", "--main", "README.textile"]
  s.require_paths = ["lib"]
  s.rubyforge_project = %q{warcraft-armory}
  s.rubygems_version = %q{1.3.0}
  s.summary = %q{Retrieve character information from the World of Warcraft Armory}
  s.test_files = ["test/character_test.rb", "test/guild_test.rb"]

  if s.respond_to? :specification_version then
    current_version = Gem::Specification::CURRENT_SPECIFICATION_VERSION
    s.specification_version = 2

    if Gem::Version.new(Gem::RubyGemsVersion) >= Gem::Version.new('1.2.0') then
    else
    end
  else
  end
end
