const path = require('path');
const os = require('os');
const fs = require('fs');

// Path System

const mypath = 'C:/Learn Web Development/NodeJs/people.js';
console.log(path.basename(mypath));
console.log(path.extname(mypath));
console.log(path.parse(mypath).name);

// ----------------------------****---------------------------
// Operating System

console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.release());
console.log(os.version());
// ----------------------------****---------------------------
// File System

fs.writeFileSync('fileWrite.txt', 'Mohammad Osman Goni');
const data = 'Amar Sonar Bangla Ami Tumay Valobasi';
fs.appendFile('fileWrite.txt', data, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File Write Successfully');
    }
});

const readdata = fs.readFileSync('fileWrite.txt');
console.log(readdata.toString());
fs.readFile('fileWrite.txt', (err, maindata) => {
    if (err) {
        console.log(err);
    } else {
        console.log(maindata.toString());
    }
});

fs.rmSync('fileWrite.txt');

fs.rm('fileWrite.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('File Delete Successfully');
    }
});
// ----------------------------****---------------------------
