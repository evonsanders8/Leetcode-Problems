// Intersection of Two Arrays
// Solution
// Given two arrays, write a function to compute their intersection.

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Note:

// Each element in the result must be unique.
// The result can be in any order.



var intersection = function(nums1, nums2) {
    if(nums1.length<1 ||nums2.length<1){
        return [];
    }else{
        
        var set1 = new Set();
        var set2 = new Set();
        //var result = [];
        
         for(let j=0; j<nums1.length; j++){
             set1.add(nums1[j])
         }
    for(let i=0; i<nums2.length; i++){
        if(set1.has(nums2[i])){
            set2.add(nums2[i]);
            
        }
        
    }
        return [...set2];
    }
};