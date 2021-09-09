// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array);

// console.log(srr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr.length);

// let sum = 0;
// let i;
// for(i = 1;i<=125;i++){
//     sum += i
//     console.log(i, "--", sum);
// }

// Add in array in last by (push)
// Add in array in first by (unshift)
// remove in array from first by (shift());
// remove in array from last by (pop());
// we can put in not only integer also can put String , object and all SVGComponentTransferFunctionElement;

// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array);
// array.push("last value");
// array.unshift("first value");
// console.log("----------------------------------");
// console.log(array);
// array.shift();
// array.pop();
// console.log("-----------------------------------");
// console.log(array);

// just like a substring in java;  *if we not give the ending index then it print from starting to last;  just like string in java

// let array = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(array.slice(0, 8));
// console.log(array);

// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 53];
// console.log(array);
// console.log(array.splice(0, 8));  // this funtion remove 8-1(last -1 index) element from the 0(first index) position
// console.log(array);

// indexOf tell the index of  Element and includes tell the element is containsn or not;
// let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 53];
// console.log(array.indexOf(53));
// console.log(array.includes(53));
// console.log(array.includes(4));
// console.log(array.includes(58));
// console.log("------------------------");

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Only change code below this line
for(let i=0;i<arr.length;i++){
  if(arr.includes(10-arr[i]) == false){
    arr.splice(i,1);
  }
}
// Only change code above this line
console.log(arr);