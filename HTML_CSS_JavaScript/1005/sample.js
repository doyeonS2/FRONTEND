// id 속성값이 title인 요소 노드 선택
const el = document.getElementById("title");
console.log(el);
// class 속성값이 text인 요소 노드 선택
const clsEl = document.getElementsByClassName("text");
// console.log(clsEl[0]);
// console.log(clsEl[1]);
for(let el of clsEl) console.log(el);

const tagEl = document.getElementsByTagName("p");
// console.log(tagEl[1]);
for(let el of tagEl) console.log(el);