(ns my-project.server
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [my-project.handler :refer [development-app production-app]])
  (:gen-class))

(defonce server (atom nil))

(defn start-server! [& [port mode]]
  (reset! server
          (run-jetty
           (case mode
             "dev"  #'development-app
             "prod" #'production-app
             #'production-app)
           {:port (if port (Integer/parseInt port) 3000)
            :join? false})))

(defn stop-server! []
  (when @server
    (.stop @server)
    (reset! server nil)))

(def -main start-server!)
