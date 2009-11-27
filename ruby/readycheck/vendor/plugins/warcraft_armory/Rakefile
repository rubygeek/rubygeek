require 'rubygems'
require 'rake'
require 'echoe'

Echoe.new('warcraft-armory', '0.0.1') do |p|
  p.description     = "Retrieve character information from the World of Warcraft Armory"
  p.url             = "http://github.com/anall/warcraft-armory"
  p.author          = "Andrea Nall"
  p.email           = "anall@andreanall.com"
  p.ignore_pattern  = ["tmp/*", "script/*", "coverage.data","lib/warcraft_armory_test_hacks.rb"]
  p.development_dependencies = []
end

Dir["#{File.dirname(__FILE__)}/tasks/*.rake"].sort.each { |ext| load ext }

namespace :test do
  desc 'Measures test coverage'
  task :coverage do
    rm_f "coverage"
    rm_f "coverage.data"
    rcov = "rcov --aggregate coverage.data --text-summary -Ilib"
    system("#{rcov} test/*_test.rb")
    system("open coverage/index.html") if PLATFORM['darwin']
  end
end