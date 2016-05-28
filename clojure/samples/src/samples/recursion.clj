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
