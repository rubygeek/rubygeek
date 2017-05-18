import random

choice = "Y"

while (choice not in ["n", "N"]):
  print("Roll the dice!!")

  number = random.randrange(1.0, 6.0)

  print(number)

  choice = input("Roll Again? (Y/n):  ")
