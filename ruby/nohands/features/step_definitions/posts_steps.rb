Given /^I am a signed in as as user called "([^\"]*)"$/ do |login|
  create_user(login)
end

Then /^I should see the list of posts$/ do
  true # express the regexp above with the code you wish you had
end



private

def create_user(login, password='passw0rd')
  user = "user"
  return user if user
end
