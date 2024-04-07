#include <vector>

using namespace std;

int main() {
    vector<int> v;

    //convert N int to binary
    while(N>0){
        v.push_back(N%2);
        N = N/2;
    }
    //if N = 9, in binary = 1001
    //9%2=1 N=4
    //4%2=0 N=2
    //2%2=0 N=1
    //1%2=1 N=0
}