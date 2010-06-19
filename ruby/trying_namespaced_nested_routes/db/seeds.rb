
e1 = Event.create(:name => "event one", :start_at => Date.today + 3.weeks,
                 :description => "this is event one, its awesome")
e1.invitations.create(:title => "Parents with kids", :description => "Bring your kids", :sent_on => Date.today)
e1.invitations.create(:title => "Bring your pets", :description => "Bring your pets", :sent_on => Date.today)


e2 = Event.create(:name => "event two", :start_at => Date.today + 3.weeks,
                 :description => "this is event two, its awesome")
e2.invitations.create(:title => "Parents with kids", :description => "Bring your kids", :sent_on => Date.today)
e2.invitations.create(:title => "Bring your pets", :description => "Bring your pets", :sent_on => Date.today)
