// 노드 조작하기 : 컨텐츠 조작하기
// let txtCon = document.getElementById("title").textContent; // 보이든 보이지 않든
// let inTxt = document.getElementById("title").innerText; // 웹브라우저에 표시되는 텍스트 접근
// let inHtml = document.getElementById("title").innerHTML;  // HTML을 포함한 텍스트

// console.log(txtCon);
// console.log(inTxt);
// console.log(inHtml);

// let txtCon = document.getElementById("title").textContent = "<h1>가을이다</h1>";
// let inTxt = document.getElementById("title").innerText = "<h1>강사님은 가을이 싫으시대요</h1>";
// let inHtml = document.getElementById("title").innerHTML = "난 가을이 좋은데!ㅎㅎ";

//-----------------------------------------
// 노드 조작하기 : 스타일 조작하기
const pE1 = document.querySelector("#text");
pE1.style.backgroundColor = "#ff0000";
pE1.style.fontSize = "20px";
pE1.style.color = "#ffffff";
pE1.style.fontWeight = "bold";


