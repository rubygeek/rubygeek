TryingResqueRedis::Application.routes.draw do
  resources :snippits

  root :to => "snippits#new"  
  mount Resque::Server, :at => "/resque"
end
