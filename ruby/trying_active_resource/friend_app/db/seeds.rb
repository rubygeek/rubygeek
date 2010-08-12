# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).

#<Friend id: nil, name: nil, city: nil, state: nil, twitter: nil, created_at: nil, updated_at: nil>

Friend.create(:name => "bob smith", :city => "austin", :state => "tx", :twitter => 'bob')

Friend.create(:name => "mark smith", :city => "chicago", :state => "il", :twitter => 'mark')


Friend.create(:name => "june roger", :city => "new york", :state => "ny", :twitter => 'june')
