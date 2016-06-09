(ns samples.combinations)

(defn  my-identity [x]
  x)

(defn my-constantly [x]
  (fn [& _]
    x))

(defn my-complement [x]
  (fn [f]
    (not f)))

