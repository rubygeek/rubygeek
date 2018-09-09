(ns language.core-test
  (:require [clojure.test :refer [deftest is testing]]
            [language.core :as lang]))

(deftest make-words
  (let [one (lang/make-english "one")
        uno (lang/make-spanish "uno")]
    (testing 
        (is (= {:Language :English :word "one"} one))
        (is (= {:Language :Spanish :word "uno"} uno)))))

(deftest translate-converts-words
  (let [one (lang/make-english "one")
        uno (lang/make-spanish "uno")]
    (testing
        (is (= "uno" (:word (lang/translate one))))
        (is (= "one" (:word (lang/translate uno)))))))
