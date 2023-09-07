#!/bin/python3

import math
import os
import random
import re
import sys
from string import ascii_lowercase

#
# Complete the 'pangrams' function below.
#
# The function is expected to return a STRING.
# The function accepts STRING s as parameter.
#

def pangrams(s):
    p = "pangram"
    np = "not pangram"

    s = s.lower()
    print("S: ")
    print(s)

    f = [0]*26

    alphabet = []
    for i in ascii_lowercase:
        alphabet.append(i)

    for l in range(len(s)):
        if s[l] in alphabet:
            index = alphabet.index(s[l])
            f[index] =  f[index] + 1

    print(f)

    if 0 in f:
        print(np)
    else:
        print(p)

if __name__ == '__main__':
    s = input()

    result = pangrams(s)
