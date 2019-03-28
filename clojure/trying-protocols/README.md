## Trying Protocols


### using in clojure:

```clojure
 user=> (require '[trying-protocols.core :refer :all])
 nil
 user=> (def dessert (cake))
 #'user/dessert
 user=> (mix dessert "bowl")
 "mixing in bowl"
 user=> (bake dessert "400" "10")
 "bake in 400 for 10 minutes"
```

### in ruby (for comparison)
not exactly 1 to 1 

 
```ruby
 class Recipe
   def mix(bowl)
   end

   def bake(temp time)
   end
 end

 class Dessert < Recipe
   def mix(bowl)
     "Mixing in " + bowl
   end

   def bake(temp time)
     "bake in " + temp + " for " + time + " mins" 
   end
 end

dessert = Dessert.new
dessert.mix("stainless bowl")
dessert.bake("300" "10")
```
