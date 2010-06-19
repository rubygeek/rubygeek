ActionController::Routing::Routes.draw do |map|
  map.resources :invitations, :only => [:index, :show]
  map.resources :events, :only => [:index, :show], :has_many => 'invitations', :shallow => true
  map.root :events
  
  map.namespace :admin do |admin|
    admin.resources :invitations, :only => [:index, :show]
    admin.resources :events, :has_many => 'invitations', :shallow => true
    admin.root :controller => :admin
  end

 
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
