#include <bits/stdc++.h>

using namespace std;
int minimumOperations(vector<int>& nums) {
        int FrequencyMaxOdd=0, FrequencyMaxEven=0,FirstValuemMaximumOdd=0,FirstValueMaximumEven=0;
        int SecondlueMaximumOdd=0,SecondValueMaximumEven=0;
        int ddEven[100005]= {0};
        int ddOdd[100005]= {0};
        for(int i=0;i<nums.size();i+=2) ddEven[nums[i]]++;
        for(int i=1;i<nums.size();i+=2) ddOdd[nums[i]]++;
        for(int i=1;i<100005;i++)
        {
            if(ddOdd[i] > FrequencyMaxOdd)
            {
                SecondlueMaximumOdd=FrequencyMaxOdd;
                FrequencyMaxOdd=ddOdd[i];
                FirstValuemMaximumOdd=i;
            }
            else if(ddOdd[i] > SecondlueMaximumOdd) SecondlueMaximumOdd=ddOdd[i];
        }
        for(int i=1;i<100005;i++)
        {
            if(ddEven[i] > FrequencyMaxEven)
            {
                SecondValueMaximumEven=FrequencyMaxEven;
                FrequencyMaxEven=ddEven[i];
                FirstValueMaximumEven=i;
            }
            else if(ddEven[i] > SecondValueMaximumEven) SecondValueMaximumEven = ddEven[i];
        }
        if(FirstValuemMaximumOdd!=FirstValueMaximumEven) return nums.size()-FrequencyMaxEven-FrequencyMaxOdd;
        else if(SecondlueMaximumOdd != 0 || SecondValueMaximumEven !=0) 
        {
            return min(nums.size() - SecondlueMaximumOdd - FrequencyMaxEven, nums.size() - FrequencyMaxOdd - SecondValueMaximumEven);
        }
        else if(SecondlueMaximumOdd==0 && SecondValueMaximumEven==0)
        {
            return min(FrequencyMaxEven,FrequencyMaxOdd);
        }
        return 0;
    }
int main()
{
    //Cho mảng vector nums. Tìm min operations để được dãy thỏa mãn 
    // 1. nums[i-2] =  nums[i]. 2<=i<=10^5
    // 2. nums[i-1] != nums[i]. 1<=i<=10^
}