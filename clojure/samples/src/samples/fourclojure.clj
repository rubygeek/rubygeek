(ns samples.fourclojure)

;;============= Problem 26 ====================
;; not finished... 
(defn twenty-six [len]
  (loop [start 1
         acc [1 1]]
    (if (= len (count acc))
      acc
      (conj acc (+ (last (butlast acc)) (last acc) ) ))
  ))
;;=============================================

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

;;============ Problem 49 =====================

(defn fourty-nine [how-many the-seq]
  (let [first-group (take how-many the-seq)
        last-group (drop how-many the-seq)]
    (vector first-group last-group)))

;;=============================================


;;============ Problem 83 =====================

(defn eighty-three [& bools]
  (or (and (some true? bools) 
           (some false? bools))
      false))

(defn better-eighty-three [& bools]
  (= 2 (count (set bools))))
;;==============================================


;;============= Problem 166 =====================

(defn onesixsix [f x y]
  (if (= (f x y) (f y x))
    :eq
    (if (f x y)
      :lt
      :gt)))

(defn better-onesixsix [f x y]
  (cond 
    (f x y) :lt
    (f y x) :gt
    :else :eq))

;;==============================================

;;============= Problem 122 ====================

(defn onetwotwo [num-str]
  (reduce + (map-indexed #(* %2 (int (Math/pow 2 %1)))  (mapv #(Character/getNumericValue %) (reverse num-str)))))

(defn better-onetwotwo [num-str]
  (Integer/parseInt num-str 2))

;;==============================================


;;=========== Problem 65 =======================

(defn sixfive [thing]
  (let [str-thing (str (empty thing))]
    (cond 
      (= str-thing "[]")  :vector
      (= str-thing "{}")  :map
      (= str-thing "#{}") :set
     :else 
      :list)))

;;==============================================

;;============ Problem 59 ======================

#_(defn fiftynine [& fs]
  (fn [x]
    (mapv (fn [f] (f x)) fs)))

(comment 
  this works for the first case 
  (fn [& fs]
   (fn [& xs]
     (mapv #(reduce % xs) fs)))
)

#_(defn fiftynine-other [& fs]
 (fn [& xs]
   (mapv (fn [f]  (mapv f #(reduce % xs))) fs)))



;;==============================================


(defn oneoneeight [f coll]
  (if (empty? coll)
    []
    (conj (oneoneeight f (rest coll)) (f (first coll)))))
