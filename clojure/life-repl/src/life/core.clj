(ns life.core)


(def tasks (atom []))

(defn todo []
  (map println tasks))



(defn -main []
  (println "hello world"))
