(ns shapes.core-test
  (:require [clojure.test :refer [is testing deftest]]
            [shapes.core :as shape]))

 (deftest helper-functions-test
   (testing "building shapes"
     (is (= :Circle   (:Shape (shape/build-circle 10))))
     (is (= :Triangle (:Shape (shape/build-triangle 10 5))))
     (is (= :Rect     (:Shape (shape/build-rect 10 5))))))

 (deftest area-test
   (testing "calculating area"
     (let [my-circle   (shape/build-circle 10)
           my-triangle (shape/build-triangle 5 10)
           my-rect     (shape/build-rect 20 5)]
       (is (= 314.1592653589793 (shape/area my-circle)))
       (is (= 25.0              (shape/area my-triangle)))
       (is (= 100.0             (shape/area my-rect))))))


