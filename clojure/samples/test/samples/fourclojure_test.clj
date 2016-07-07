(ns samples.fourclojure-test
  (:require [clojure.test :refer :all]
            [samples.fourclojure :refer :all]))

;; ================ Tests for Problem 34 ========
(deftest thirty-four-first
  (is (= [1 2 3] (thirty-four 1 4))))

(deftest thirty-four-second
  (is (= [-2 -1 0 1] (thirty-four -2 2))))

(deftest thirty-four-third 
  (is (= [5 6 7] (thirty-four 5 8))))

(deftest better-thirty-four-second
  (is (= [-2 -1 0 1] (better-thirty-four -2 2))))

;; ===============================================

(deftest fourty-nine-first
  (is (= (fourty-nine 3 [1 2 3 4 5 6]) [[1 2 3] [4 5 6]])))

(deftest fourty-nine-second
  (is (= (fourty-nine 1 [:a :b :c :d]) [[:a] [:b :c :d]])))

(deftest fourty-nine-third
  (is (= (fourty-nine 2 [[1 2] [3 4] [5 6]]) [[[1 2] [3 4]] [[5 6]]])))

;; ==================================================

(deftest eighty-three-first
  (is (= false (eighty-three false false))))
(deftest eighty-three-second
  (is (= true (eighty-three true false)) ))
;; ================================================

(deftest onesixsix_all
  (let [__ better-onesixsix]
    (is (= :eq (__ < 4 4)))
    (is (= :gt (__ < 5 1)))
    (is (= :gt (__ > 0 2)))
    (is (= :lt (__ (fn [x y] (< (mod x 5) (mod y 5))) 21 3)))
    (is (= :eq (__ (fn [x y] (< (count x) (count y))) "pear" "plum")))))

;; ================================================

(deftest onetwotwo-test
  (let [__ onetwotwo]
    (is (= 0     (__ "0")))
    (is (= 7     (__ "111")))
    (is (= 8     (__ "1000")))
    (is (= 9     (__ "1001")))
    (is (= 255   (__ "11111111")))
    (is (= 1365  (__ "10101010101")))
    (is (= 1365  (__ "10101010101")))))

;;=================================================

;;=================== Problem 26 ==================

(deftest twentysix-test
  (let [__ twenty-six]
    (is (= (__ 3) '(1 1 2)))
    (is (= (__ 6) '(1 1 2 3 5 8)))
    (is (= (__ 8) '(1 1 2 3 5 8 13 21)))))


;;================= Problem 59 ====================

#_(deftest fiftynine-test
  (let [__ fiftynine-other]
    (is (= [21 6 1] ((__ + max min) 2 3 5 1 6 4)))
    (is (= ["HELLO" 5] ((__ #(.toUpperCase %) count) "hello")))
    (is (= [2 6 4] ((__ :a :c :b) {:a 2, :b 4, :c 6, :d 8 :e 10}))))
)

;;=================================================

