//module ko require karne k liye
// let fs = require("fs");

// file read ke liye 
// let content = fs.readFileSync("f1.txt");

//"," kya karta hai provide karta hai data ko hexadecimal nform me 
// console.log("content : " , content);

// //"+" kya karta hai - concatinate karke string form me convert kar diya jo ki text hai
// console.log("content : " + content);

// // agar file exict karti hai hai to overwrite ho jaega , agar file exict nhi karti to create ho ke content put ho jaega
// fs.writeFileSync("abc.txt", "Hum aaj khush nhi hai");

// // append ho jaega
// fs.appendFileSync("abc.txt", "Bhai khush kyu nahi hai");

// // file ko remove kare k liye kaam aata hai
// fs.unlinkSync("abc.txt");
// console.log("File removed");

// // fs.existsSync() btata hai ki file exist karti hai ya nhi
// let dosePathExist = fs.existsSync("f1.txt");
// console.log(dosePathExist);

// // file ya directory ke stats pta karne k liye
// StatsOfPath = fs.lstatSync("f1.txt");
// console.log("Stats", StatsOfPath);
// console.log("IsFile", StatsOfPath.isFile());
// console.log("IsDirectory", StatsOfPath.isDirectory());

// yha pe maine kya kiya ki ek folder ka path pass kiya jisse ki mereko uske andar ki file array ke form me mil gai
// let address = "C:\\Users\\Gauri Shukla\\Desktop\\explore\\Javascript";
// let contents = fs.readdirSync(address);
// console.log(contents);

// ****************************************************path*********************************************************

// let path = require("path");
// let fs = require("fs");

// let inputarr = process.argv.slice(2);          //// isse hamlog terminal se input le sakte hai ** or slice(2) is liye ki node or file ka name na aae
// let fileName = inputarr[0];
// let content = inputarr[1];
// console.log("fileName", fileName);
// console.log("content ", content);

// let inputarr = process.argv.slice(2);
// for(let eky in inputarr){
//     let content = inputarr[eky];
//     console.log("content ", content);
// }


// // current path of directory 
// let currentpath = process.cwd();
// console.log("currentpathh", currentpath);


// // path -> paths -> plateform independent
// let joinedPath = path.join(currentpath, "abc","def", "efg");
// console.log("joinedPath", joinedPath);
// let ans = "didi pagle hai";

// let filepath = path.join(currentpath, "String.js", ans);
// console.log("filepath", filepath);
// fs.writeFileSync(filepath,content);