Dir['vendor/**/lib'].each do |libdir|
  $: << libdir
end
require "rubygems"
require "sinatra"
require "spec/rake/spectask"

desc "Run all specs in spec directory"
Spec::Rake::SpecTask.new(:spec) do |t|
  t.spec_files = FileList["spec/*_spec.rb"]
end

task :default => :spec

