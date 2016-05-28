(ns samples.recursion)

;; base case = return 0 if empty list
;; advancing = pass rest of list to length
;; initalizing passing list to length
(defn length [ls]
  (if (empty? ls)
    0
    (+ 1 (length (rest ls)))))



;; tail recursion
;; base case = return acc if we are at end of list
;; advancing = call with rest of list and adding 1 to acc
;; initializing = calling helper with the rest of list and 1 added to acc

(defn tail-length-helper [ls acc]
  (if (empty? ls)
    acc
    (recur (rest ls) (+ 1 acc))))

(defn tail-length [ls]
  (tail-length-helper ls 0))

(tail-length [1 2 3])

;; recursive reverse
;; base case  = return acc when coll is only 1 in length
;; advancing = take butlast 
;; initializing = call helper with all but last and last added to acc

(defn rrev-helper [coll acc]
  (if (= 1 (count coll))
    (conj acc (first coll))
    (recur (butlast coll) (conj acc (last coll)))))

(defn rrev [coll]
  (rrev-helper coll []))

;; now with loop
(defn loop-rrev [coll]
  (loop [coll coll acc []]
    (if (= 1 (count coll))
      (conj acc (first coll))
      (recur (butlast coll) (conj acc (last coll))))))

(loop-rrev [2 3 4 5 6])

;; factorial
;; base case 1 
;; advancing n -1 
;; initializing passing n 

(defn factorial [n]
  (if (zero? n)
    1
    (* n (factorial (dec n)))))

;; tail factorial
;; base case: 1 return acc
;; advancing dec n
;; intializing passing n and acc
(defn tail-fac-helper [n acc]
  (if (zero? n)
    acc
    (recur (dec n) (* n acc))))

(defn tail-fac [n]
  (tail-fac-helper n 1))

(defn loop-fac [n]
  (loop [n n
         acc 1]
    (if (zero? n)
      acc
      (recur (dec n) (* n acc)))))

;; making my own map function

;; base return acc if list empty
;; advancing  pass rest of list to domap
;; initializing pass f ls and empty vector
(defn domap [f ls acc]
  (if (empty? ls)
    acc
    (recur f (rest ls) (conj acc (f (first ls))) )))

(defn mymap [f ls]
  (domap f ls []))


;; not working :/
(defn loop-mymap [f ls]
  (loop [ls ls
         acc []]
    (if (empty? ls)
      acc
      (recur (rest ls) (conj acc (f (first ls)))))))

(loop-mymap inc [1 1 2 3])
