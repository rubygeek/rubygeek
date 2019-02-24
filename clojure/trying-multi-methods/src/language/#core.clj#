(ns language.core)

(def en->es {"one"   "uno"
             "two"   "dos"
             "three" "tres"})

(def es->en {"uno"  "one"
             "dos"  "two"
             "tres" "three"})


(defmulti translate :Language)

(defmethod translate :Spanish [w]
  (get es->en (:word w)))

(defmethod translate :English [w]
  (get en->es (:word w)))

(defmethod translate :default [x] :oops)


(defn make-spanish [word]
  {:Language :Spanish :word word})

(defn make-english [word]
  {:Language :English :word word})

