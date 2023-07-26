#Cat & Mouse Hackerrank

#Inputs: q (# of inputs), x, y, z (each correspond to 2cats, 1mouse)
#Outputs: Prints which cat is closest to mouse, if equal distance outputs mouse

#receiving input in python
#strip() - removes whitespaces. You can specify which character(s) to remove
#lets user type something that goes in a Python variable, result is always a string
#int() converts to int

q = int(input().strip())
print("q is: " + str(q))

for i in range(q):
    x,y,z = input().strip().split(' '); #split() - splits a string into a list
    x,y,z = [int(x),int(y),int(z)]

if abs(x-z) > abs(y-z):
    print("Cat A")
elif abs(x-z) < abs(y-z):
    print("Cat B")
else:
    print("Mouse C")

print("hello")
