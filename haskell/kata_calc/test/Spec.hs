import Test.Hspec
import Test.QuickCheck
import Control.Exception (evaluate)
import KataCalc

main :: IO ()
main = hspec $ do

  describe "KataCalc" $ do
    it "should sum the empty string" $ do
      sumString "" `shouldBe` (0 :: Int)

  describe "add single number" $ do
      it "should add positive number" $ do
        sumString "1" `shouldBe` (1 :: Int)

      it "should add negative number" $ do
        sumString "-2" `shouldBe` (-2 :: Int)
