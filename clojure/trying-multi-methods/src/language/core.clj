(ns language.core)

(def en->es {"one"   "uno"
             "two"   "dos"
             "three" "tres"})

(def es->en {"uno"  "one"
             "dos"  "two"
             "tres" "three"})


(defmulti translate :Lanaguage)

(defmethod translate :Spanish [word]
  en->es[word])

(defmethod translate :English [word]
  es->en[word])

(defn make-spanish [word]
  {:Language :Spanish :word word})

(defn make-english [word]
  {:Language :English :word word})

