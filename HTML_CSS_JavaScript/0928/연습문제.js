/* 1. 성적을 입력받아 학점 출력하기
- 0 ~ 100점 사이가 아니면 입력 오류 출력
- 90점 이상 A
- 80점 이상 B
- 70점 이상 C
- 60점 이상 D
- 나머지 F 처리 */

//------------------------------------------------------------
// 내가 푼 방법

// let tmp, score;
// tmp = prompt("성적을 입력하세요 : ", "");
// score = Number(tmp);

// if(score >= 90 && score < 100) {
//     document.write("<p class='score'>A</p>")
// } else if(score >= 80 && score < 90)  {
//     document.write("<p class='score'>B</p>")
// } else if(score >= 70 && score < 80) {
//     document.write("<p class='score'>C</p>")
// } else if(score >= 60 && score < 70) {
//     document.write("<p class='score'>D</p>")
// } else if(score < 60 && score >= 0) {
//     document.write("<p class='score'>F</p>")
// } else document.write("입력 오류 : 성적을 다시 입력 하세요.")
//----------------------------------------------------------------

// 강사님 코드

// while(true) {
//     score = prompt("성적을 입력 : ", "");
//     score = Number(score);
//     if(score < 0 || score > 100) {
//     alert("입력오류 : 성적을 다시 입력하세요.");
//     } else break;
// }
// if (score >= 90) document.write("<p class='score'>A</p>");
// else if (score >= 80) document.write("<p class='score'>B</p>");
// else if (score >= 70) document.write("<p class='score'>C</p>");
// else if (score >= 60) document.write("<p class='score'>D</p>"); 
// else document.write("<p class='score'>F</p>");


/* 2. 정수 n을 입력받아 n * n 행렬 출력하기
- 예) 3 입력
  1 2 3
  4 5 6
  7 8 9 */

// let tmp2, n;
// tmp = prompt("정수를 입력하세요. : ", "")
// n = Number(tmp);

// for(let i = 1; i <= n * n; i++) {
//     document.write("<span class='nbyn'>" + i + " " + "</span>");
//     if(i % n == 0) document.write("<br>");
// }


// /* 3. 1 ~ 1000 사이의 7의 배수를 구하고 한줄에 10개씩 출력하기 */

for(let i = 1; i < 1000; i++) {
            if(i % 7 == 0) {
            document.write("<span class=double>" +  i + " " + "</span>");
            if(i % 70 == 0) { 
                document.write("<br>");
        }
    }
}