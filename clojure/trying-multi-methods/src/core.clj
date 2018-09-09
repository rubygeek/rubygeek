(ns language.core)

(def eng->es {"one"   {:s "uno"}
              "two"   {:s "dos"}
              "three" {:s "tres"}})

(def es->eng {"uno"  {:e "one"}
              "dos"  {:e "two"}
              "tres" {:e "three"}})


(defmulti translate :Language)

(defmethod translate :Spanish [word]
  (:e (es->eng[word])))

(defmethod translate :English [word]
  (:s (eng->es[word])))

(defn make-spanish [word]
  {:Language :spanish :word word})

(defn make-english [word]
  {:Language :english :word word})

