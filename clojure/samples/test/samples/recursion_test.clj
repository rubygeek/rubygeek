(ns samples.recursion-test
  (:require [clojure.test :refer :all]
            [samples.recursion :refer :all]))

(deftest test-length
  (is (= 3 (length [1 2 3]))))

(deftest test-tail-length
  (is (= 3 (tail-length [1 2 3]))))

(deftest test-recursive-reverse
  (is (= [4 3 2 1] (rrev [1 2 3 4]))))

(deftest test-loop-recursive-reverse
  (is (= [4 3 2 1] (loop-rrev [1 2 3 4]))))

(deftest test-factorial
  (is (= 6 (factorial 3))))

(deftest test-tail-fact
  (is (= 6 (tail-fac 3))))

(deftest test-loop-fact
  (is (= 6 (loop-fac 3))))

(deftest test-mymap
  (is (= [2 2 3 4] (mymap inc [1 1 2 3]))))

(deftest test-loop-mymap
  (is (= [2 2 3 4] (loop-mymap inc [1 1 2 3]))))
