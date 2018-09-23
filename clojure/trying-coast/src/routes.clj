(ns routes
  (:require [coast.router]))

(def routes [[:get "/" `controllers.home/index :home]
             [:get "/recipes"  `recipes/index  :recipes/index]])

(def url-for (coast.router/url-for-routes routes))
(def action-for (coast.router/action-for-routes routes))
