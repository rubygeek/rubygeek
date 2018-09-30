;; to avoid "Octal literals are not allowed in strict mode."
;; https://github.com/anmonteiro/lumo/issues/28
(.setFlagsFromString (js/require "v8") "--no-use_strict")

(def puppeteer (js/require "puppeteer"))
(def Q (js/require "q"))

(-> (Q (.launch puppeteer))
    (.then (fn [browser]
             (-> (Q (.newPage browser))
                 (.then (fn [page]
                          (.goto page "https://www.google.com/")
                          (.screenshot page #js {:path "example.png"})))
                 (.then #(.close browser))))))
