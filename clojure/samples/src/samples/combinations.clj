(ns samples.combinations)

(defn  my-identity [x]
  x)

(defn my-constantly [x]
  (fn [& _]
    x))

(defn my-complement [x]
  (fn [f]
    (not f)))

(defn my-partial [f & xs]
  (fn [& ys]
    (apply f (concat xs ys))))

(defn my-fnil [f default]
  (fn [x & xs]
    (if (nil? x)
      (apply f default xs)
      (apply f x xs))))

(defn my-comp [f g]
  (fn [x]
    (f (g x))))

(defn my-juxt [f g]
  (fn [x] 
    [(f x) (g x)]))

(defn my-apply [f args]
  (if (seq args)
    (recur (partial f (first args)) (rest args))
    (f)))

