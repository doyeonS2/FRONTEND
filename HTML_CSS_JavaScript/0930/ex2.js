// 즉시 실행 함수 : ???
// 함수 표현식으로 익명의 함수 만들기

// 한번 쓰고 버리려고 익명의 함수를 만들었는데.... 어? 변수는 한번 쓰고 버리면 안되는데...........? 하고
// 진짜 한번만 쓰고 버릴 함수를 만들었다고 한다!...........네..........그렇군요..^^

const init = function() { 
    console.log("initialize~!!!!!");
}
init();

// (function init() {
//     console.log("initialize !!!");
// })(); // 변수도 안 만들고 그냥 한번 쓰고 버리는 함수.. 호출부가 없어도 사용 가능.. 쌉가넝~~~

console.log("----------------");

//--------------------------------------------------------------------
// Callback 함수 : 함수의 매개변수로 함수를 전달하는 방식이다.
// 자바스크립트에서 비동기적인 메카니즘을 지원
// 자바스크립트는 싱글쓰레드 언어이기 때문에 쓰레드가 Blocking 되는 현상을 막고 Non-Blocking 되도록 한다.
function cry() {
    console.log("웁니다.. 흑흑 ㅠ_ㅜ");
}
function sing() {
    console.log("노래를 부릅니당~!^_^");
}
function dance() {
    console.log("춤을 춥니당!!!!!!~~ 얼쑤~~!");
}
function checkMood(mood) {
    if(mood === "good") sing();
    else cry();
}
checkMood("good");
checkMood("sad");

console.log("----------------");

// 자바스크립트에는 쓰레드가 없기 때문에~~
// 내가 부른 함수가 끝나면..! 이 함수를 불러서 끝내주세요..(?)
// 기분이 좋으면 굿콜.. 안좋으면 배드콜 불러주세요............?
function checkMoodCallback(mood, goodCall, badCall) {
    if(mood === "good") goodCall();
    else badCall();
}
// 기분이 좋으면 춤을 추고, 기분이 나쁘면 노래를 부른다!!!
checkMoodCallback("good", dance, sing); // 기분 좋으니까 댄스!!
checkMoodCallback("bad", dance, sing); // 기분 나쁘니까 노래!!

// 응용......
// 내가 버튼을 누르면 일정한 시간이 지난 다음에 끝날 때 !! 
// 내가 원하는 것!! 예를 들어.. 애니메이션 함수를 만들어놓고 불러주게 할 수 있따..!!

//----------------------------------------------
// 기본값 할당
function sum(a = 10, b = 20); { // 값이 안들어오면 a는 10, b는 20으로 찍겠다!
    console.log(a + b);
}
sum(); // 30 출력

function sum(a = 10, b = 20); {
    console.log(a + b);
}
sum(100); // 120 출력.. a에 100 대입되고 값이 대입 안 된 b는 디폴트 값 20으로 출력

function sum(a = 10, b = 20); {
    console.log(a + b);
}
sum(100, 200); // 300 출력.. a에 100 대입, b에 200대입!

function sum(a = 0, b = 0); { // 값이 안들어오면 a, b 둘 다 0으로 찍겠다!
    console.log(a + b);
}
sum(); // 0 출력

function sum(a, b); { // 값이 정의 안된 상태
    console.log(a + b);
}
sum(); // NaN 출력
