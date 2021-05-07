'use strict';

const fs = require('fs');
const fileName = './sync.txt';

console.time("time"); // 計測開始
for (let count = 0; count < 256; count++) {
  fs.appendFileSync(fileName, `${count}:\t`, 'utf8', ()=> {});
  fs.appendFileSync(fileName, 'あ', 'utf8', ()=> {});
  fs.appendFileSync(fileName, 'い', 'utf8', ()=> {});
  fs.appendFileSync(fileName, 'う', 'utf8', ()=> {});
  fs.appendFileSync(fileName, 'え', 'utf8', ()=> {});
  fs.appendFileSync(fileName, 'お', 'utf8', ()=> {});
  fs.appendFileSync(fileName, '\n', 'utf8', ()=> {});
  console.timeLog("time"); // 必要に応じて
}
console.timeEnd("time"); // 計測終了