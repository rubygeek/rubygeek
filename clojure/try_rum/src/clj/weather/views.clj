(ns weather.views
  (:require [hiccup.page :refer [html5 include-css include-js]]))

(defn render-page []
  (html5
   [:head
    [:title "Weather"]
    [:meta {:charset "utf-8"}]
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
    (include-css "/css/style.css")
    (include-js "/cljs/app.js")]
   [:body
    [:div#app]
    [:script {:type "text/javascript"} "weather.client.mount_root();"]]))
