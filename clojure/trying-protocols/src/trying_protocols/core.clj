(ns trying-protocols.core)

;; no implementations present 
(defprotocol Recipe
  (mix [this bowl])
  (bake [this pan time]))

;; implementions for object of type cake
(defn cake []
  (reify Recipe
    (mix [_ bowl]
      (str "mixing in "  bowl))
    (bake [_ temp time]
      (str "bake in " temp " for " time " minutes"))))

