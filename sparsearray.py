import math
import os
import random
import re
import sys

def find_queries(strings, queries):
    query_arr = []
    j = 0
    for j in queries:
        n_queries = 0
        i = 0
        for i in strings:
            # print("i: "+str(i))
            # print("j: "+str(j))
            # print("queries: "+ str(queries))
            # print("strings: "+ str(strings))
            # print("n_queries: " + str(n_queries))
            if j == i:
                n_queries += 1
        query_arr.append(n_queries)
    return query_arr

def solution2(strings, queries):
    query_arr = []
    n_queries = 0

    for i in range(len(queries)):
<<<<<<< HEAD
        n_queries = strings.count(queries[i])
=======
        n_queries = strings.count(queries[i]) 
>>>>>>> e4b4ed070695ec53e5c155e5ccefd8a4fc164c83
        query_arr.append(n_queries)

    return query_arr

if __name__ == '__main__':
    print("my string arr: ")
    strings = input().strip().split()
    strings = list(map(int,strings))
    #print(strings)

    print("my queries arr: ")
    queries = input().strip().split()
    queries = list(map(int,queries))
    #print(queries)

    result = find_queries(strings, queries)
    print(result)

    print("Solution 2: ")
    result = solution2(strings, queries)
    print(result)
