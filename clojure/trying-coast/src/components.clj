(ns components)

(defn layout [request body]
  [:html
    [:head
     [:meta {:name "viewport" :content "width=device-width, initial-scale=1"}]
     [:link {:href "/css/app.css" :type "text/css" :rel "stylesheet"}]
     [:link {:type "text/css" :rel "stylesheet" :href "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" :integrity "sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" :crossorigin "anonymous"}]]

    [:body
     body
     [:script {:src "/js/app.js" :type "text/javascript"}]]])
