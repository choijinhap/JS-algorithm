const WEEK_MS = 1000 * 60 * 60 * 24 * 7;
const startDate = new Date('2002-12-07 00:00:00');
const nowDate = new Date();
let recentDrwn = parseInt((nowDate - startDate) / WEEK_MS) + 1;
const URL =
  'https://dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=' + recentDrwn;

function getLastNums() {
  const lastNums = [];
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.open('get', URL, false);
  xmlHttp.send(null);
  console.log(JSON.parse(xmlHttp.responseText));
  lastNums.push(JSON.parse(xmlHttp.responseText).drwtNo1);
  lastNums.push(JSON.parse(xmlHttp.responseText).drwtNo2);
  lastNums.push(JSON.parse(xmlHttp.responseText).drwtNo3);
  lastNums.push(JSON.parse(xmlHttp.responseText).drwtNo4);
  lastNums.push(JSON.parse(xmlHttp.responseText).drwtNo5);
  lastNums.push(JSON.parse(xmlHttp.responseText).drwtNo6);
  lastNums.push(JSON.parse(xmlHttp.responseText).bnusNo);
  return lastNums;
}
const lastNums = getLastNums();
document.getElementById('lastNums').innerText = lastNums;

function getRecmNums() {
  const posNums = [];
  const recmNums = [];
  for (let i = 1; i < 46; i++) {
    if (lastNums.indexOf(i) < 0) {
      posNums.push(i);
    }
  }

  let num;
  for (let i = 0; i < 7; i++) {
    num = Math.floor(Math.random() * posNums.length);
    recmNums.push(posNums[num]);
    const idx = posNums.indexOf(posNums[num]);
      posNums.splice(idx, 1);
      console.log(num);
      console.log(posNums);
    
  }
  return recmNums;
}
function printRecmNums() {
  const recmNums = getRecmNums();
  document.getElementById('recommend').innerText = recmNums;
}
document.getElementById('press').addEventListener('click', printRecmNums);
