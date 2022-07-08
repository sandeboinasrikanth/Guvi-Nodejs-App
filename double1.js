// console.log(document)  =>  ❌
// console.log(window)    =>  ❌
// console.log(global)    =>  ✅

const dbl =(n)=> n*2;
// console.log("hello,👍", dbl(10));
// console.log(dbl(10));
// console.log(process.argv);    //arguments values
// console.log(dbl((process.argv[2]))); 

const [, , num] = process.argv;
console.log(dbl(num))



