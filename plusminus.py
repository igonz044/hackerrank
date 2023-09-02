#Plus Minus Hackerrank

#Inputs: n - size of array, n integers space seperated
#Outputs: proportion of neg. pos. and zeros

#Process input, strip white spaces, convert into int
print("Input size: ")
n = int(input().strip())

print("Input array of " + str(n) + " numbers: ")

pos=0
neg=0
zeros=0

myarr = input().strip().split(' ')
#we have arr of strings so convert each str to into int
for i in range(n):
    myarr[i] = int(myarr[i])
    if myarr[i] > 0:
        pos+=1
    elif myarr[i] < 0:
        neg+=1
    else:
        zeros+=1

print("Proportion of pos: " + str(pos/n))
print("Proportion of neg: " + str(neg/n))
print("Proportion of zeros: " + str(zeros/n))
