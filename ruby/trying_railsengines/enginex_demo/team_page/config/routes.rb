Rails.application.routes.draw do
  get "team" => "team_page/team#index", :as => :team_page
end