(ns samples.recursion-test
  (:require [clojure.test :refer :all]
            [samples.recursion :refer :all]))

(deftest test-hello
  (is (= "hello there nola" (hello "nola"))))

(deftest test-length
  (is (= 3 (length [1 2 3]))))

(deftest test-tail-length
  (is (= 3 (tail-length [1 2 3]))))
