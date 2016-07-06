(ns four-clojure.thirty-four)

(defn d [start end]
  (loop [end start]
    (when (< end start)
      (println start)
      (recur (inc start)))))

