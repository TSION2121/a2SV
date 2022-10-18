/**
 * @param {number[]} nums
 * @return {number[]}
 */

const arr = [3, 5, 4, 1, 2];
const smallerNumbersThanCurrent = (arr = []) => {
   const res=[];
   for(let i = 0; i < arr.length; i++){
      let count = 0;
      let j = 0;
      while(j < arr.length){
         if(arr[i] > arr[j]){
            count++;
            j++;
         }else{
            j++;
         };
      };
      res.push(count);
   };
   return res;
};
console.log(smallerNumbersThanCurrent(arr));


