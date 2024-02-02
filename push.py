import os

print("============")
print("|| GitHub ||")
print("============")

commitMsg = str(input("Enter Commit Message: "))

commit = ('git commit -m  "' + commitMsg + '"')

commands = [
  'git add *',
  commit,
  "git push origin main"
]

for i in commands:
  print(i)
  os.system(i)