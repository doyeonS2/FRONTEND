// 함수 : 
// 1. 특정 작업을 여러번 반복 수행해야 하는 경우 재사용 목적으로 만듦
// 2. 특정 이벤트 발생 시 기능을 동작하게 할 수 있음
// 3. 함수 선언식으로 생성

// let sum1 = sum(100, 200);
// console.log(sum1);

// function sum(n1, n2) {
//     return n1 + n2;
// }

// function sum(n1, n2) {
//     document.write("<h1>" + (n1 + n2) + "</h1>");
// }

// function sub(n1, n2) {
//     document.write("<h1>" + (n1 - n2) + "</h1>");
// }

// let firstVal;
// let secondVal;
// let op;

// function inputFst(num) {
//     firstVal = num;
// }

// function inputSec(num) {
//     secondVal = num;
// }

// function inputOp(operator) {
//     op = operator;
// }

// function inputEnter() {
//     switch(op) {
//         case "+" :
//             document.write("<h1>" + (firstVal + secondVal) + "</h1>");
//             break;
//         case "-" :
//             document.write("<h1>" + (firstVal - secondVal) + "</h1>");
//             break;
//         case "*" :
//             document.write("<h1>" + (firstVal * secondVal) + "</h1>");
//             break;
//         case "/" :
//             document.write("<h1>" + (firstVal / secondVal) + "</h1>");
//             break;
//     }
// }
//-------------------------------------------
// 함수 선언식 : 함수를 선언하고 호출을 아무곳에서나 할 수 있음
// sum (100, 200);

// function sum(p1, p2) {
//     return p1 + p2;
// }
//-------------------------------------------
// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식(함수에 주소를 대입하는 관계?)
// let sum = function(p1, p2) {
//     return p1 + p2;
// }

// console.log(sum(100, 200));
//-------------------------------------------

const gugudan = function() {
    for(let i = 1; i < 10; i++) {
        console.log(`3 * ${i} = ${3 * i}`);
    }
}
let test = gugudan; // 주소를 복사
test();

//-------------------------------------------
// 함수 표현식
const gugudan1 = function(dan) {
    for (let i = 1; i < 10; i++) {
        console.log(`${dan} * ${i} = ${dan * i}`);
    }
}
// 화살표 함수
const gugudan2 = (dan) => {
    console.log(`${dan} * ${i} = ${dan * i}`);
} 
//-------------------------------------------
// 함수 및 변수의 스코프 이해
// 함수 스코프 방식 : 함수에서 정의한 블록문만 스코프 유효 범위로 간주
let a = 10;
function sum() {
    console.log(`함수 내부 : ${a}`);
}
sum();
console.log(`함수 외부 : ${a}`); // a가 전역변수?

// 블록 스코프 방식 : ES6부터 추가된 개념
// 자바는 블록 스코브 방식!!!!!!!!!!!!! 자스는 아니었는데 ES6부터 추가됨!!!

let b = 10; // b라는 변수는 전역이니까 괄호 안, 밖에서 다 실행 가능,,
{
    let b = 100; // 외부(b=10), 내부(b=100) 둘 다 있으면 100이 찍힘. why? 지역변수가 우선이기 때문^^
    let c = 20; 
    console.log(`코드 블록 내부 b : ${b}`);
    console.log(`코드 블록 내부 c : ${c}`);
}
console.log(`코드 블록 외부 b : ${b}`);
// console.log(`코드 블록 외부 c : ${c}`); // <- 얘만 없으면 실행됨

//---------------------------
const d = 100;
d = 50; // 에러남!!!!!! const는 상수이기 때문^^ 바꿀 수 없다,,!

//------------------------
// 호이스팅 : 코드를 선언과 할당을 분리해 선언부를 자신의 최상위로 끌어 올리는 것
var e = 10; 
var e = 20; // var는 이것도 됨....ㅎㅎ => let으로 바꾸면 에러남... let을 쓰자^^
let g = 100;
{
    let g = 100;
    var f = 20; // var는.. 호이스팅.. (맨 위로 끌어올림.........) => 괄호 밖으로 끌어올림..
    console.log(`코드 블록 내부 e : ${e}`);
    console.log(`코드 블록 내부 f : ${f}`);
    console.log(`코드 블록 내부 g : ${g}`);
    var f = 20; // 이것도 끌어올려지기 때문에 에러안남! 대입은 여기서 이루어지고 선언은 위에서 이루어짐! 값은 끌어올려지지 않기 때문에 값이 없는 상태(?)
}
console.log(`코드 블록 외부 e : ${e}`);
console.log(`코드 블록 외부 f : ${f}`);
console.log(`코드 블록 외부 g : ${g}`);

//--------------------------------------------