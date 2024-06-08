// Take a number and check it is prime number or not 

let n = 10
let count = 0
for(let i = 1; i<=n; i++){

    if(n%i == 0){
        // console.log(i)
        count = count+1
    }
}

// console.log(count)
if(count == 2){
    console.log("Prime Number")
}
else {
    console.log("Not")
}