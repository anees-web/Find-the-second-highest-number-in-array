// function max(arr){
//     //first
//     let first=arr[0];//2 -> 3 -> 4 -> 5
//     for(let i=1; i<arr.length; i++){
//         //First
//         if(arr[i]>first){
//         //in first loop we compared 2 with arr[1]=1; 2
//         //2nd loop, comapring 3>2
//         //3rd loop, comapring 4>3
//         m=arr[i];
//     }
//     //2nd
//     let sec=arr[0];
//     for(let j=0; j<arr.length; j++){
//         if(arr[i]>first){

//             m=arr[i];
            
//     }
//     return sec;
// }   
//     return pos;
    
// }
// }
// let c = max(marks);
// console.log(c);


let arr = [3,5,2,6,8,4,3,5,7,9];
let sLargest =Number.MIN_VALUE;
let largest =Number.MIN_VALUE;

for(let i = 0; i<arr.length; i++){
    if(largest < arr[i]){
        sLargest =largest;
        largest = arr[i];
        
    }
    if(sLargest<arr[i] && largest>arr[i]){
        sLargest=arr[i];
    }
}

console.log(sLargest);


