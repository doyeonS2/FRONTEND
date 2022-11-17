let dDay = new Date("2022-12-26");
let now = new Date();
// getTime : 1970년 1월 1일 12:00 이후의 경과 시간을 밀리초 단위로 표시
let toNow = now.getTime(); // 현재 시점의 시간
let toDay = dDay.getTime(); // 종료 시점의 시간
let remainTime = toDay - toNow;
// 24시간 * 60분 * 60초 * 1000ms
remainTime = Math.round(remainTime/(1000*60*60*24));
document.querySelector("#result").innerHTML = remainTime;