let arr = [10.45, 9.519, 85.56, 22, 6.26, 98.245, 15, 34.2];
let min = Math.round(Math.min(...arr)); 
let max = Math.ceil(Math.max(...arr)); 

let divisionResult = max % min;
console.log(divisionResult);  

let num1 = 10.4568313123132;
let num1Str = num1.toFixed(3); 
console.log(num1Str);  

console.log(num1Str.length);  

let num1Int = Math.floor(Number(num1Str));  
console.log(num1);  