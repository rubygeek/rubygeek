ActionController::Routing::Routes.draw do |map|
  map.resources :products, :collection => { :from_apple => :get},
                           :member => {:discontinue => :put }


  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
