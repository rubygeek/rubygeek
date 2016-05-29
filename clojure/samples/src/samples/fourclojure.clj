(ns samples.fourclojure)


;;=========== Problem 34 ======================

;; base case: < end 
;; advancing: +1
;; initialing: pass start, end
(defn thirty-four [start end]
  (loop [n start acc []]
    (if (= n end )
       acc
      (recur (inc n) (conj acc n)))))

;; others had this solution
(defn better-thirty-four [start end]
  (take (- end start) (iterate inc start)))

;;=============================================

;;============ Problem 83 =====================

(defn eighty-three [& bools]
  (or (and (some true? bools) 
           (some false? bools))
      false))

(defn better-eighty-three [& bools]
  (= 2 (count (set bools))))
;;==============================================



