module KataCalc (sumString) where

sumString :: String -> Int
sumString "" = 0
sumString s = sum $ map rInt (split s)
  where rInt :: String -> Int
        rInt s = read s
