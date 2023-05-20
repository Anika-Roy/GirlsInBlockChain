// Q1
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("fizzbuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else {
//     console.log(i);
//   }
// }
//Q2 + 3
// for (let i = 1; i <= 10; i++) {
//     row=''
//     for (let j = 10; j >= i; j--) {
//         row+='*'
//     }
//     console.log(row)
//   }

//Q4
for (let i = 1; i <= 7; i+=2) {
    row=''
    for (let j = 0; j <= (7/2 -i/2); j++) {
        row+=' '
    }
    for (let j = 0; j <= i; j++) {
        row+='*'
    }
    console.log(row)
  }