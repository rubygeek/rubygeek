(ns weather.handler
  (:require [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [ring.middleware.reload :refer [wrap-reload]]
            [prone.middleware :refer [wrap-exceptions]]
            [ring.middleware.json :refer [wrap-json-response]]
            [compojure.core :refer [defroutes GET]]
            [compojure.route :refer [not-found]]
            [weather.views :refer [render-page]]
            [ring.util.response :refer [response]]))

(def dummy-data "{\"coord\":{\"lon\":-122.09,\"lat\":37.39},\"weather\":[{\"id\":500,\"main\":\"Rain\",\"description\":\"light rain\",\"icon\":\"10d\"}],\"base\":\"stations\",\"main\":{\"temp\":280.44,\"pressure\":1017,\"humidity\":61,\"temp_min\":279.15,\"temp_max\":281.15},\"visibility\":12874,\"wind\":{\"speed\":8.2,\"deg\":340,\"gust\":11.3},\"clouds\":{\"all\":1},\"dt\":1519061700,\"sys\":{\"type\":1,\"id\":392,\"message\":0.0027,\"country\":\"US\",\"sunrise\":1519051894,\"sunset\":1519091585},\"id\":0,\"name\":\"Mountain View\",\"cod\":200}" )

(defroutes routes
  (GET "/" [] (render-page))
  (GET "/zipcode/78610" [] (response {:temp 89 :windspeed 5}))
  (not-found "Not Found"))


(def development-app (-> #'routes
                         wrap-json-response
                         wrap-reload))

;; original
#_(def development-app (wrap-reload
                        (wrap-exceptions
		         (wrap-defaults #'routes site-defaults))))

(def production-app (wrap-defaults #'routes site-defaults))
