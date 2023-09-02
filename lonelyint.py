import math
import os
import random
import re
import sys

def find_lonelyint(int_array):
    for i in range(len(int_array)):
        if int_array.count(int_array[i]) == 1:
            lonely_int = int_array[i]

    return lonely_int

if __name__ == '__main__':
    print("int_arr: ")
    int_array = input().strip().split()
    int_array = list(map(int,int_array))


    print("Solution: ")
    result = find_lonelyint(int_array)
    print(result)
    #
