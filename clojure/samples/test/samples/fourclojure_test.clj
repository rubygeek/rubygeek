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
