# #!/bin/python3
# import math
# import os
# import random
# import re
# import sys
#
# # Complete the 'flippingBits' function below.
# #
# # The function is expected to return a LONG_INTEGER.
# # The function accepts LONG_INTEGER n as parameter.
#
# def flippingBits(n):
#     # Write your code here
#     #convert input to binary
#     n_arr = []
#
#     while not n:
#         m = n%2
#         print(m)
#         n_arr.insert(0,m)
#
#     n_arr = list(map(int,str(n)))
#     n_arr_length = 32 - len(n_arr)
#
#
#     for x in range(n_arr_length):
#         n_arr.insert(0,0)
#     for i in n_arr:
#         n_arr[i] = 1 if i else 0
#
#     result = 0
#     for j in n_arr:
#         result = result*2+int(j)
#
#     return result
#
# if __name__ == '__main__':
#     fptr = open(os.environ['OUTPUT_PATH'], 'w')
#
#     q = int(input().strip())
#
#     for q_itr in range(q):
#         n = int(input().strip())
#
#         result = flippingBits(n)
#
#         fptr.write(str(result) + '\n')
#
#     fptr.close()


#!/bin/python3
import math
import os
import random
import re
import sys

# Complete the 'flippingBits' function below.
#
# The function is expected to return a LONG_INTEGER.
# The function accepts LONG_INTEGER n as parameter.

def flippingBits(n):
    # Write your code here
    #convert input to binary
    print(n)
    n_arr = []

    m = n
    while m > 0:
        mod = m%2
        n_arr.insert(0,mod)
        m = (m-mod) / 2

    print(n_arr)
    n_arr_length = 32 - len(n_arr)

    for x in range(n_arr_length):
        n_arr.insert(0,0)

    for i in range(len(n_arr)):
        if n_arr[i] == 1:
            n_arr[i] = 0
        else:
            n_arr[i] = 1

    result = 0
    for j in n_arr:
        result = (result*2)+j

    return result

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    q = int(input().strip())

    for q_itr in range(q):
        n = int(input().strip())

        result = flippingBits(n)

        fptr.write(str(result) + '\n')

    fptr.close()
