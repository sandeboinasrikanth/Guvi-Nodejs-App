const os = require("os");    //import inbuilt package
console.log("Free memory", os.freemem() /1024 / 1024 /1024);
// 1024bytes => 1kb
console.log("Total memory", os.totalmem() /1024 / 1024 / 1024);
console.log("version", os.version());
console.log("Cpus", os.Cpus());


