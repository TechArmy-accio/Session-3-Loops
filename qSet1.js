// print all even number from 1-100 

// count all even numbers from 1-100 

// find the sum of all numbers from 1-100

// for(let i = 2; i<=100; i=i+2){
//     console.log(i)
// }

// let count = 0
// for(let i = 1; i<=5; i++){


//     // i = 2, 4
//    if(i%2 ==0){ // if this condition is true, it means its a even  number
//      console.log(i) // 2, 4
//       count = count + 1 // 2

//     //   console.log("ans1", count)
//    }

// //    console.log("ans2", count) // 0, 1,1,2,2
// }

// console.log("ans3", count)


let sum = 0
for(let i = 1; i<=100; i++){

     // i = 10
    if(i%2 == 0){
        // even number
        sum = sum+ i //  30
    }
}

console.log(sum)