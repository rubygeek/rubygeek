(ns shapes.core)

(defmulti area :Shape)

(defmethod area :Rect [s]
    (* (:wd s) (:ht s) 1.0))

(defmethod area :Circle [s]
    (* (. Math PI) (* (:radius s) (:radius s))))

(defmethod area :Triangle [s]
  (* (:b s) (:h s) 0.5) )
    
(defmethod area :default [x] :oops)


;; Helper Functions
(defn build-rect [wd ht]    {:Shape :Rect :wd wd :ht ht})
(defn build-circle [radius] {:Shape :Circle :radius radius})
(defn build-triangle [b h]  {:Shape :Triangle :b b :h h})


