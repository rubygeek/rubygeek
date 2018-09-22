(ns weather.client
  (:require [rum.core :as rum]))

(def app-state (atom {:temp 90
                      :wind 4}))



(rum/defc weather-global-state < rum/reactive
  []
  [:div [:ul [:li (str "Wind: " (:wind @app-state))]
             [:li (str "Temp: " (:temp @app-state))]]])

(rum/defcs weather-local-state < (rum/local 0 ::hot)
  [state label]
  [:div
   [:ul
    [:li (str  "Weather for " label)]
    [:li (str "Votes for hot: " @(::hot state))]]

   [:button  {:on-click (fn [_] (swap! (::hot state) inc))} "Vote: It is hot" ]
   ]
  )


(rum/defc root-component []
  [:div
   [:div [:h1 "Weather with global state"]
     (weather-global-state)]
   [:div [:h1 "Weather with local state"]
     (weather-local-state "Austin TX")]]
  )





(defn ^:export mount-root []
  (rum/mount (root-component) (.getElementById js/document "app")))
