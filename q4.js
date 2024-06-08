// q4: 
// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range):
// -> Numbers should be even
// -> Second last digit of number is 4

// Input:
// Two lines of input each containing a single integer.
// Output:
// A single integer which is the product of all such numbers which follow the above mentioned conditions.

// Example:

// Case 1:
// Input:
// 10
// 20
// Output:
// 0

// Case 2:
// 30
// 44
// Output:
// 40*42*44

let n1 = 10
let n2 = 20
let mul = 1
let flag = false
for(let i = n1; i<=n2; i++){
       let last2Digit =  i%100 //  42
       let secondLastDigit =  parseInt(last2Digit/10)
     // 1342
    if(i%2 == 0 && secondLastDigit == 4){
        console.log(i)
         mul = mul * i
         flag = true
    }


}
// console.log(mul)
if(flag == true){
    console.log(mul)
}
else{
    console.log(0)
}