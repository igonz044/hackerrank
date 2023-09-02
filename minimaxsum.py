#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'miniMaxSum' function below.
#
# The function accepts INTEGER_ARRAY arr as parameter.
#

def miniMaxSum(arr):
    # Write your code here
    sum1=0
    l = len(arr)
    for i in range(l):
        sum1 = sum1+arr[i]

    #Finding min
    starting_min = sum1
    for j in range(l):
        min1 = sum1-arr[j]
        if min1 < starting_min:
            starting_min = min1
            
    #Finding max
    starting_max = arr[0]
    for number in arr:
        max1 = sum1-number
        if max1 > starting_max:
            starting_max = max1

    print(starting_min, starting_max)

if __name__ == '__main__':

    arr = list(map(int, input().rstrip().split()))

    miniMaxSum(arr)
