const WEEK_MS = 1000 * 60 * 60 * 24 * 7;
const startDate = new Date('2002-12-07 00:00:00');
const nowDate = new Date();
let recentDrwn = parseInt((nowDate - startDate) / WEEK_MS) + 1;
const URL =
  'https://dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=' + recentDrwn;

function getLastNums(){
  const lastNums=[];
  let xmlHttp=new XMLHttpRequest();
  xmlHttp.open('get',URL,false);
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
console.log(getLastNums());
