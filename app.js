'use strict';
(() => {
  const fs = require('fs');
  const fileName = './test.txt';

  const appendFilePromise = (fileName, str) => {
    return new Promise((resolve) => {
      fs.appendFile(fileName, str, 'utf8', () => resolve());
    });
  }

  const main = async () => {
    for (let count = 0; count < 30; count++) {
      await appendFilePromise(fileName, 'おはようございます\n', 'utf8', () => { });
      await appendFilePromise(fileName, 'こんにちは\n', 'utf8', () => { });
      await appendFilePromise(fileName, 'こんばんは\n', 'utf8', () => { });
    }
  }
  main();
})();

