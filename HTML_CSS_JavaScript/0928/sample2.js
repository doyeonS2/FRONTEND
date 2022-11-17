// console.log(test);
// var test =- 10; // 선언도 안했는데 에러가 안 난다구??ㅇ.ㅇ

// console.log(test);
// let test =- 10; // 아직 선언안됐기때문에 에러남 => let을 쓰자^_^

//------------------------------------------------------

// let currentYear = 2022;
// let birthYear;
// let age;

// birthYear = prompt("태어난 연도를 입력하세용 : (YYYY)", "");
// age = currentYear - birthYear + 1;
// document.write(currentYear + "년 현재 <br>");
// document.write(birthYear + "년에 태어난 사람의 나이는 " + age + "세 입니다.");

//------------------------------------------------------

// 실습 문제 - 3개의 정수를 입력 받아 가장 큰 수와 작은 수 구하기
let a,b,c, tmp;
let min, max;
tmp = prompt("첫번째 수 입력 : ", "");
a = Number(tmp);
tmp = prompt("두번째 수 입력 : ", "");
b = Number(tmp);
tmp = prompt("세번째 수 입력 : ", "");
c = Number(tmp);

if(a > b) {
    if(a > c) max = a;
    else min = b;
} else {
    if(b > c) max = b;
    else max = c;
}
if(a > b) {
    if(b > c) min = c;
    else min = b;
} else {
    if(a > c) min = c;
    else min = a;
}
document.write("<h3>제일 큰 값 : " + max + " </h3>");
document.write("<h3>제일 작은 값 : " + min + " </h3>");

//------------------------------------------------------
// 같은 문제 => 함수로 푸는 법


// let a = prompt("첫번째 수 입력하시오");
// let b = prompt("두번째 수 입력 : ", "");
// let c = prompt("세번째 수 입력 : ", "");

// document.write("<h3>max : " + Math.max(a,b,c) + "</h3>");
// document.write("<h3>min : " + Math.min(a,b,c) + "</h3>");