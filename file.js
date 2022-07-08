const fs = require("fs");
const { fileURLToPath } = require("url");

const quote ="No beauty shines brighter than that of a good heart ❤️";
fs.writeFile("./awesome.html", quote, (err) =>{
    // console.log(err);
    console.log("Completed writing")
} );


const quote2 = "Live more ,worry less😎";
// Task 1
// Create the below files with quote2 as the content
// /backup/
// text-1.html
// text-2.html
// text-3.html
// ....
// text-10.html
// console.log(process.argv);
// const [, , noOfFiles ] =process.argv;
// for ( let i =1 ; i<10; i++){
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) =>{
//         console.log(err);
//         console.log(`Completed writing text-${i}.html`);
//     }) ;
// }

// task2 
// node file.js 30 => 30 files to be created / text-1 .html ... text-30.html 


// console.log(process.argv);
// const [, , noOfFiles] = process.argv;

// for ( let i =1 ; i<noOfFiles; i++){
//     fs.writeFile(`./backup/text-${i}.html`, quote2, (err) =>{
//         // console.log(err);
//         console.log(`Completed writing text-${i}.html`);
//     }) ;
// }

// fs.readFile('./cool.txt', "utf-8", (err, data ) => {
//     if (err){
//         console.log(err);
//     }
//     console.log(data);
// })


// const quote3 = "Make everyday little less Ordinarily 🤔"

// fs.appendFile("./nice.txt/", "\n" +quote3, (err)=> {
//     console.log("Completed Writing")
// })

// const quote4 = `

// programers must avoid leaving fales clues that obscure .
// we should avoid words. 
// abbrevations could be disinformative`;

// fs.appendFile(
//     "./nice.txt/",
// `

// ${quote4}

// `,
//  (err)=> {
//     console.log("Completed Writing")
// })


fs.unlink("./delete.css", (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log("completed deleting!!!")
    }
})

