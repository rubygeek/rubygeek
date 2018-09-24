(ns examples.core
  (:require [clara.rules :as clara :refer :all]
            [clara.rules.accumulators :as acc]))

(defrecord SupportRequest [client level])

(defrecord ClientRepresentative [name client])

(defrule is-important
  "Find important support requests."
  [SupportRequest
   ;(= ?level level)
   (<= 8 level)]
  =>
  (println "High support requested!"))

(defrule is-not-so-important
  "Find not so important support requests."
  [SupportRequest
   ;(= ?level level)
   (> 4 level)]
  =>
  (println "Low level support requested!"))

(defrule notify-client-rep
  "Find the client representative and request support."
  [SupportRequest
   (= ?client client)
   (= ?level level)]

  [ClientRepresentative
   (= ?client client)
   (= ?name name)]
  =>
  (println "Notify" ?name "that"
           ?client "has a new support request! Level: " ?level))

(defn run-rules
  [facts]
  (let [session (mk-session 'examples.core)]
    (fire-rules (insert-all session facts))))

(defn -main []
  (run-rules
   [(->ClientRepresentative "Alice" "Acme")
    (->ClientRepresentative "Bob" "Acme")
    (->ClientRepresentative "Bob" "ABC")
    (->SupportRequest
     "Acme" 9)
    (->SupportRequest "Acme" 3)
    (->SupportRequest "ABC" 2)
    ]))
