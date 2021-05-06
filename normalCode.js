'use strict';

const fs = require('fs');
const fileName = './normal.txt';

console.time("time"); // 計測開始
for (let count = 0; count < 256; count++) {
  fs.appendFile(fileName, `${count}:\t`, 'utf8', ()=> {});
  fs.appendFile(fileName, 'あ', 'utf8', ()=> {});
  fs.appendFile(fileName, 'い', 'utf8', ()=> {});
  fs.appendFile(fileName, 'う', 'utf8', ()=> {});
  fs.appendFile(fileName, 'え', 'utf8', ()=> {});
  fs.appendFile(fileName, 'お', 'utf8', ()=> {});
  fs.appendFile(fileName, '\n', 'utf8', ()=> {});
  console.timeLog("time"); // 必要に応じて
}
console.timeEnd("time"); // 計測終了