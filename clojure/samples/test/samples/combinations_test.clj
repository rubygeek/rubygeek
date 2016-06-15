(ns samples.combinations-test
  (:require [clojure.test :refer :all]
            [samples.combinations :refer :all]))

(deftest my-identity-keyword
  (let [mine (my-identity :nola)
        theirs (identity :nola)]
  (is (= mine theirs))))

(deftest my-identity-number
  (let [mine (my-identity 5)
        theirs (identity 5)]
  (is (= mine theirs))))

(deftest my-identity-string
  (let [mine (my-identity "nola")
        theirs (identity "nola")]
  (is (= mine theirs))))

;;---------------------------------------

(deftest my-constantly-symbol
  (let [mine (my-constantly :nola)
        theirs (constantly :nola)]
  (is (= :nola (mine 1) (theirs 1)))))

(deftest my-constantly-string
  (let [mine (my-constantly "nola")
        theirs (constantly "nola")]
  (is (= "nola" (mine "red") (theirs "red")))))

(deftest my-constant-number
  (let [mine (my-constantly 42)
        theirs (constantly 42)]
  (is (= 42 (mine :apple) (theirs :apple)))))

;;------------------------------------------

(deftest my-complement-test
  (let [mine (my-complement true?)
        theirs (complement true?)]
  (is (= false (mine true) (theirs true)))))

;;------------------------------------------

(deftest my-partial-test
  (let [mine (my-partial + 3)
        theirs (partial + 3)]
  (is (= 8 (mine 5) (theirs 5)))))

;;------------------------------------------

(deftest my-fnil-test 
  (let [mine (my-fnil inc 0)
        theirs (fnil inc 0)]
  (is (= 1 (mine nil) (theirs nil)))))

;;-----------------------------------------

(deftest my-comp-test
  (let [mine (my-comp str inc) 
        theirs (comp str inc)]
  (is (= "1" (mine 0) (theirs 0)))))

;;------------------------------------------

(deftest my-juxt-test
  (let [mine   (my-juxt inc str)
        theirs (juxt    inc str)  ]
    (is (= [6 "5"] (mine 5) (theirs 5) ))))

;;-------------------------------------------

(deftest my-apply-test
  (let [mine (my-apply + [1 2 3]) 
        theirs (apply + [1 2 3])]
  (is (= 6 mine theirs))))
