(ns samples.sets-test
  (:require [clojure.test :refer :all]
            [samples.sets :refer :all]))

(deftest test-data-is-set
  (is (= clojure.lang.PersistentHashSet (class data)))
  (is (set? data))
  (is (= 3 (count data))))

(deftest test-membership
  (is (= :tacos (data :tacos)))
  (is (= nil (data "bob")))
  (is (contains? data :tacos))
  (is (false? (contains? data "bob")))) 

;; sets are not always going to have the same order...
;; unless its a sorted set

(deftest test-sorted-set 
  (is (= :brisket (first sorted-data)))
  (is (= 3 (count sorted-data))))
