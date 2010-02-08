Feature: Posts

  I want to see all the posts 
  
Scenario: Show all the post in a list
  Given I am a signed in as as user called "nola"
  When I go to the list of posts
  Then I should see the list of posts

