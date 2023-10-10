import math
import os
import random
import re
import sys

def timeConversion(s):
    # Write your code here
    if s[0:2]=="12" and "AM" in s:
        #convert hour to 0
        #s[0] = '0'
        #s[1] = '0'
        s= s.replace("12","00",1)
        s= s.replace("AM","")
        print("Military time: " +s)
    elif "AM" in s:
        #hr stays the same
        s=s.replace("AM","")
        print("Military time: " +s)
    elif s[0:2]=="12" and "PM" in s:
        #hr stays the same
        s=s.replace("PM","")
        print("Military time: " +s)
    elif "PM" in s:
        #add 12 to hour
        #s[0] = str(hr[0])
        #s[1] = str(hr[1])
        #s[0,1] = str(hr[0,1])
        str_hour = s[0:2]
        #print("str_hour= "+str_hour)
        hr = int(str_hour)
        hr = hr+12;
        #print("hr="+str(hr))
        s= s.replace(str_hour,str(hr))
        s= s.replace("PM","")
        print("Military time: " +s)

    else:
        print("not found")


if __name__ == '__main__':
    s = input()

    result = timeConversion(s)

    print(result)
