#include <iostream> 
#include <fstream>
#include <string>
#include <cstdio>
#include <algorithm>
#include <array>

using namespace std;

int main()
{  
    //array initialization
    //int A[] = {1, 3, 6, 4, 1, 2};
    //int A[] = {1, 2, 3};
    int A[] = {-1, -3};
    
    int len = sizeof(A)/sizeof(A[0]);

    //Sorting array
    std::sort(A, A + len);
    
    // cout<<"After sorting array : ";
    // for(int i=0; i<len; i++)
    // {
    //     cout<<" "<<A[i];
    // }

    int intcheck=1;
    bool toggle=false;
    
    for(int i = 0; i < len; i++){
    if (A[i]<1){}
        if(A[i]!=intcheck && toggle == true){
            cout << "intcheck: " << intcheck << endl;
            cout << "A[i]: " << A[i] << endl;
            intcheck++;
            if(intcheck != A[i]){ cout << "final: " << intcheck << endl; return intcheck;}
        }else if(A[i]==intcheck){
            //cout << "B" << intcheck;
            toggle=true;
        }
    }  
}