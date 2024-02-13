//1a.print odd numbers  
 
function odd (...a){
  for(i=0; i<a.length; i++){
    if(a[i]%2==1){
      console.log(a[i])
    }
  }
}(odd(1,2,3,4,5,6,7))

//IIEF:
var array=[1,2,3,4,5,6,7,8,9];
 (function (array)
 {
    for(var i=0; i<array.length; i++)
    {
      if(array[i]%2!==0)
      {
         console.log(array[i]);
      }
    }
 })(array);

 //1b.covert sring to title caps
 var str="my name is kathiravan";
function caps (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return str.join(' ');
}console.log(caps(str))

//IIEF:
var str="my name is kathiravan";
(function (str) {
   str = str.toLowerCase().split(' ');
   for (var i = 0; i < str.length; i++) {
     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
   } 
   return console.log(str.join(' '));
})(str);

//1c.sum of all numbers 

function add(...a){
  let sum = 0;
  for(var i=0; i<a.length; i++){
      sum = sum+a[i];
  }
  return sum;
}
console.log(add(1,2,3));

//IIEF:

var a=[1,2,3,4,5,6,7,8,9];
let sum=0;
(function (a)
{
   for(let i=0; i<a.length; i++)
   {
     sum=sum+a[i];
     console.log(sum)
   }
   return sum;
})
(a);

//1.d return all prime numbers in array
//IIFE
(  
  function(numArray){
     numArray = numArray.filter((number) => {
       for (var i = 2; i <= Math.sqrt(number); i++) {
         if (number % i === 0) return false;
       }
       return true;
     });
     console.log(numArray);
 })([1,2,3,4,5,6,7])


 function prime(numArray){
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
}(prime[1,2,3,4,5])

//1.return all palindrome in array

function reverse(n) {
  var rem, res = 0
  while (n > 0) {
      rem = n % 10
      res = res * 10 + rem
      n = n / 10
  }
  return res
}

function isPalindrome(n) {
  if (n == reverse(n)) return true
}

function sumArray(arr) {
  var sum = 0
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 10 && isPalindrome(arr[i])) {
          sum += arr[i]
      }
      
  }
  console.log(sum);    
}


sumArray([12, 313, 11, 44, 9, 1])
console.log(311 + 342)

//IIFE


//1.f median of 2 sorted array of same size

var a = function (array1, array2) {
  let arr = [...array1, ...array2]
  arr.sort(function (a, b) { return a - b });
  //console.log(arr)
  if (arr.length % 2 === 0) {
      let median = (arr[(arr.length / 2) - 1] + arr[(arr.length / 2)]) / 2
      console.log(median)
  }
  else {
      let median = arr[arr.length / 2]
      console.log(median)
  }
}
a([1, 12, 15, 26,34], [2, 13, 17, 30,40])


//IIEF


//1.g remove dublicates from array
var a = function (array) {
  const mySet1 = new Set()
  for (element in array) {
      mySet1.add(array[element])
  }
  console.log(mySet1)
}
a([11, 12, 12, 12, 13, 13, 13, 15, 16, 16, 16, 17, 18, 19])

//IIEF



//1.h rotate k times
var a = function (array1, k) {
  let rotatedarray = []

  for (let i = 0; i < array1.length; i++) {
      let newIndex = (i + k) % array1.length
      rotatedarray[newIndex] = array1[i]
  }
  console.log(rotatedarray)
}
a([11, 12, 13, 14, 15, 16, 17], 2)

(function (array1, k) {
  let rotatedarray = []

  for (let i = 0; i < array1.length; i++) {
      let newIndex = (i + k) % array1.length
      rotatedarray[newIndex] = array1[i]
  }
  console.log(rotatedarray)


})([11, 12, 13, 14, 15, 16, 17], 2) 