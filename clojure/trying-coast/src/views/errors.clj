(ns views.errors)

(defn not-found [request]
  [:html
   [:head
    [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
    [:link {:href "/css/app.css" :type "text/css" :rel "stylesheet"}]]
   [:body
    "Cound't find what you were looking for"
    [:script {:src "/js/app.js" :type "text/javascript"}]]])

(defn internal-server-error [request]
  [:html
    [:head
     [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
     [:link {:href "/css/app.css" :type "text/css" :rel "stylesheet"}]]
    [:body
     "Something went wrong!"
     [:script {:src "/js/app.js" :type "text/javascript"}]]])
