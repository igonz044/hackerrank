#include <iostream> 
#include <fstream>
#include <string>
#include <cstdio>
#include <algorithm>

using namespace std;

void letterCount(string P){
    int frequency[26] = {0};
    int letter, index, sum=0;

    for(int i = 0; i < P.length(); i++){
        letter = int(P[i]);//i=0 a -> 97, i=1 a -> 97,
        index = letter-97;//a -> index=0
        frequency[index] += 1; //frequency[0] -> 0+1, frequency[0] -> 1+1, frequency[0] -> 1+1         
    }
    for(int j = 0; j < 26; j++){
        if(frequency[j] > 0){
            sum += 1;
            //cout << frequency[j] << endl; //2,0,0...
        }
    }
    cout << sum;
}
void CreateS(string P, string Q) {
    string S="";
    if(P==Q){
        //find distinct letter count of P
        letterCount(P);
    }
    else{
        //Optimization: checking if P or Q is only 1 letter
        /*
        cout << "1";
        for(int index = 1; index < P.length(); index++){
            if(P[0]==P[index] || Q[0]==Q[index]){
                //return 1;
                cout << "2";
            }
            else {
        */
                //cout << "3";
                //outer loop is Q, inner loop is P
                for(int i = 0; i < P.length(); i++){
                    for(int j = 0; j < Q.length(); j++){
                        if(i!=j){ //i=0 j=0, i=0 j=1, i=0 j=2, i=1 j=0, i=1 j=1, i=1 j=2 
                            S += P[i];
                            S += Q[j];
                            cout << S << " " << endl;
                        }
                    }
                }
            }
        }
   // }
//}
int main(){
    string P = "ca";
    string Q = "ab";

    CreateS(P, Q);
}