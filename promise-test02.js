'use strict';

new Promise((resolve) => {
  const nowDate = new Date();
  resolve(nowDate);
}).then((v1) => {
  // v1 <- 現在時間情報
  new Promise((resolve) => {
    const monthAndDate = {
      month: v1.getMonth(),
      date: v1.getDate()
    }
    resolve(monthAndDate);
  }).then((v2) => {
    new Promise((resolve) => {
      const text = `今日は${v2.month+1}月${v2.date}日です。`;
      resolve(text);
    }).then((v3) => {
      console.log(v3);
    });
  });
});


const now = new Date();
console.log(now);