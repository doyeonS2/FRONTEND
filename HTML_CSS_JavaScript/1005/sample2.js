// CSS의 선택자 사용하기 - query 메서드
const el = document.querySelector(".box-1");
// console.log(el);

const el_1 = document.querySelectorAll(".box-1 .text");
// console.log(el_1);

for(let el of el_1) console.log(el);