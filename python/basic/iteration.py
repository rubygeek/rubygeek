
# Iterating over a string
s = "hello world"
"""
outputs:

--h--
--e--
--l--
--l--
--o--
-- --
--w--
--o--
--r--
--l--
--d--
"""

for letter in s:
    print "--" + letter + "--"
