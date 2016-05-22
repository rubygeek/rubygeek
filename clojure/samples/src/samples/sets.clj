(ns samples.sets
  (:require [clojure.set :as set]))

(def data #{:tacos :brisket :ice-cream})
(def sorted-data (sorted-set :ice-cream :brisket :tacos))
(def convert-to-sorted-data (apply sorted-set data))
