blocks = int(input("Enter the number of blocks: "))

while blocks>height:
    height += 1
    blocks = blocks - height

print("The height of the pyramid:", height)