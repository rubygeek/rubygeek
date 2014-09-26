(ns webdev.core
  (:require [webdev.item.model :as items]
            [webdev.item.handler :refer [handle-index-items
                                         handle-create-item
                                         handle-delete-item
                                         handle-update-item]])
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.resource :refer [wrap-resource]]
            [ring.middleware.file-info :refer [wrap-file-info]]
            [compojure.core :refer [defroutes ANY GET POST PUT DELETE]]
            [compojure.route :refer [not-found]]
            [ring.handler.dump :refer [handle-dump]]))

(def db "jdbc:postgresql://localhost/webdev")

(defn greet [req] 
  {:status 200
   :body "Hello There World"
   :headers {}})

(defn goodbye [req]
  {:status 200
   :body "goodbye"
   :headers {}})

(defn about [req]
  {:status 200
   :body "I'm Nola and this is clojure"
   :headers {}})

(defn yo [req]
  (let [name (get-in req [:route-params :name])]
 {:status 200
  :body (str "Hello " name)
  :headers {}}))


(def ops 
  { "+" +
    "-" -})

(defn calc [req]
  (let [num1 (Integer. (get-in req [:route-params :num1]))
        num2 (Integer. (get-in req [:route-params :num2]))
        op   (get-in req [:route-params :op])
        f    (get ops op)]
  {:status 200
   :body (str (f num1 num2))
   :headers {}}))

(defroutes routes
  (GET "/" [] greet)
  (GET "/bye" [] goodbye)
  (GET "/about" [] about)
  (ANY "/request" [] handle-dump)
  (GET "/yo/:name" [] yo)
  (GET "/calc/:num1/:op/:num2" [] calc)
  (GET "/items" [] handle-index-items)
  (POST "/items" [] handle-create-item)
  (DELETE "/items/:item-id" [] handle-delete-item)
  (PUT "/items/:item-id" [] handle-update-item)
  (not-found "Page not found"))

(defn wrap-db [handler]
  (fn [req]
     (handler (assoc req :webdev/db db))))

(defn wrap-server [handler]
  (fn [req]
    (assoc-in (handler req) [:headers "Server"] "RubyGeek")))

(def sim-methods {"PUT" :put
                  "DELETE" :delete})

(defn wrap-simulated-methods [handler]
  (fn [req]
    (if-let [method (and (= :post (:request-method req))
                         (sim-methods (get-in req [:params "_method"])))]
    (handler (assoc req :request-method method))
    (handler req))))


(def app
  (wrap-server
   (wrap-file-info
    (wrap-resource 
     (wrap-db 
      (wrap-params 
       (wrap-simulated-methods 
        routes)))
     "static"))))

(defn -main [port]
  (items/create-table db)
  (jetty/run-jetty app                 {:port (Integer. port)}))

(defn -dev-main [port]
  (items/create-table db)
  (jetty/run-jetty (wrap-reload #'app) {:port (Integer. port)}))
