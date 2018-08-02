(ns try-devcards-rum.core
  (:require
   [rum.core :as rum]
   [cljs.reader]
   [cljs.test])
  (:require-macros
   [cljs.test :refer [is testing]]
   [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)


;; just a label

(rum/defc label [text]
  [:div {:class "label"} text])


(defcard rum-card
  (label "foobar"))


;; counter 
(def counter-atom (atom 0))

(rum/defc counter < rum/reactive []
  [:button {:on-click (fn [_] (swap! counter-atom inc))}
   "Clicks! " (rum/react counter-atom)])

(defcard rum-card-counter
   (counter) )


;; a function and tests for it

(defn format-name ([first-name]
                   (str "DOE, " first-name))
                  ([first-name last-name]
                   (str last-name ", " first-name)))

(deftest my-name-test
  (testing
      (is (= "stowe, nola" (format-name "nola" "stowe")) "testing first and last name")
      (is (= "DOE, nola"   (format-name "nola"))         "Only a first name")
      (is (= true false)                                 "This is false on purpose")
    ))

(defcard running-tests
  (my-name-test))


;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

