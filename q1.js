
let n = 6 

// 6*5*4*3*2*1 
// 1*2*3*4*5*6

let mul = 1
for(let i = n ; i>=1; i--){ // 6, 5
  
    // console.log(i)
    mul = mul*i
    //  mul = 1*5 = 5 
    
}
console.log(mul)


// mul = 6*5
    // mul = 6*5*4
    // mul = 6*5*4*3 ...