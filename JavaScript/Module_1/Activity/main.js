let fs = require("fs");
let path = require("path");
let inputArr = process.argv.slice(2);
// console.log("inputArr", inputArr);
let mainDir = inputArr[0];
// let topicFromInput = inputArr.slice(1, 4);
let cwd = process.cwd();
// console.log("topicFromInput", topicFromInput);

let mainDirPath = path.join(cwd, mainDir);
let isMainModulePresent = fs.existsSync(mainDirPath);
if (isMainModulePresent) {
    // console.log("Directory is already created");
    // return;
} else {
    // console.log(mainDir, " created");
    fs.mkdirSync(mainDirPath);
    let topicFromInput = inputArr.slice(1, 4);
    for (let i = 0; i < topicFromInput.length; i++) {
        let cTopicPath = path.join(mainDirPath, topicFromInput[i]);
        // console.log(topicFromInput[i], "created");
        fs.mkdirSync(cTopicPath);
        for (let j = 1; j <= 5; j++) {
            let modulePath = path.join(cTopicPath,"Module" + j);
                fs.mkdirSync(modulePath);
                // console.log("Module" + j, "created inside ", topicFromInput[i]);
            let filePath = path.join(modulePath, "content.md");
            fs.writeFileSync(filePath, "# Hello");
        }
    }
}