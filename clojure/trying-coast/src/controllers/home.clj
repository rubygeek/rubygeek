(ns controllers.home
  (:require [views.home]))

(defn index [request]
  (views.home/index request))
