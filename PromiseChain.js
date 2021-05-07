'use strict';

const fs = require('fs');
const fileName = './PromiseChain.txt';

function appendFilePromise(fileName, str) {
  return new Promise((resolve) => {
    fs.appendFile(fileName, str, 'utf8', () => resolve());
  });
}



for (let count = 0; count < 256; count++) {
  appendFilePromise(fileName, 'あ')
    .then(() => {
      return appendFilePromise(fileName, 'い');
    })
    .then(() => {
      return appendFilePromise(fileName, 'う');
    })
    .then(() => {
      return appendFilePromise(fileName, 'え');
    })
    .then(() => {
      return appendFilePromise(fileName, 'お');
    })
    .then(() => {
      return appendFilePromise(fileName, '\n');
    });
}
