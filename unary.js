// Operator: 

// unary operator: (++, --)


// let a = 10 
// let z = a++ 
// console.log(z)
// console.log(a)




// let b = 10 
// let y = ++b
// console.log(b)
// console.log(y)



// let a = 0 

// let ans = a + a++ + a

// // t1 = a , (t1 = 0, a = 0)
// // t2 = a++, (t2=a, t2=0, a=a+1=>a=1)
// // t3 = a, (t3 = 1, a=1)
// // ans = t1+t2+t3

// console.log(ans,a) // 1,1


// let b = 0

// let ans1 = b + ++b + b  
// // //let ans1 = b(0) + ++b(b=1, 1) + b(1)   // 2,1, 1,1

// console.log(ans1,b)


// let b=0 
// // console(b++) // 0

// let y = b++



let a = 0 

let ans = a++ + ++a

// ans = a++ + ++a

// a++ => 0, a = 1 
// ++a => a = 2, ++a = 2




console.log(ans,a) // 2,2


let b = 0 

let ans1 = b++ + b-- + ++b + --b // 2,0

// b++(0,1), b--(1,0) , ++b( 1,1) , --b(0 ,0)