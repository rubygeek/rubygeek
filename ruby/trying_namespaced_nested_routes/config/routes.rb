ActionController::Routing::Routes.draw do |map|
  map.resources :invitations
  map.resources :events, :has_many => 'invitations', :shallow => true
  map.root :events
 
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
