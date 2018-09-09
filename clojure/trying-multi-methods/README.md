# Trying out Multimethods

## Start a REPL
``` shell

▶ clj
Clojure 1.9.0
user=> (load "shapes/core")
user=> (in-ns 'shapes.core)
```


Then create objects with the helper methods and call area on them.

``` shell
(def r (build-rect 4 13))
(area r)
```


## Running Tests

``` shell
clojure -Atest
```

