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

