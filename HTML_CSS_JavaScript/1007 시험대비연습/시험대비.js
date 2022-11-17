// 8차 UI 구현 시험 대비

// 1. HTML5 DOCTYPE과 head, body 기본 구조 기술
// <!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
// </body>
// </html>

// 2. 상위 폴더 경로 찾기
// <!DOCTYPE html>
// <html>
// <head>
// </head>
// <body>
//     <script src="../../시험연습/샘플.txt"></script>
// </body>
// </html>

// 3. input 태그 속성 5가지 이상 : text, password, email, tel, radio, checkbox, submit, image

// 4. 웹 표준 관련 기술 3가지 기술 : html5, css3, javascript

// 5. 자바스크립트를 작성하는 3가지 방식 : inline 방식, internal 방식, external 방식

// 6. dom 가져오기 : getElementById
// document.getElementById("Id")
// document.getElementsByClassName("class")
// document.getElementsByTagName("Tag")

// 7. HTML의 영역을 구분하는 태그 중 div 태그와 span 태그의 차이점

// 8. NaN : Not-A-Number, 연산 결과가 숫자가 아님을 의미

// 9. 배열 만드는 2가지 방법
// (1) let arr = [];
// (2) let arr2 = new Array(개수);

// 10. 전역객체(Window)의 Infinity 속성에 대해 서술 : 숫자를 0으로 나누면 발생

// 11. 자바스크립트의 스코프 중 functional scope에 대해서 설명 : 변수가 선언된 함수에서만 접근 가능
// function test() {
//     let kkk = 10;
//     console.log(kkk);
// }
// test();
// console.log(kkk);

// 12. 블록스코프?? : 블록 안에서만 변수에 접근할 수 있는 스코프
// var은 함수스코프를 따르고 let은 블록스코프를 따른다!
// {
//     let kkk = 1000;
//     console.log(kkk);
// }
// console.log(kkk); // 에러남!

// {
//     var kkk = 1000;
//     console.log(kkk);
// }
// console.log(kkk); // 에러안남!

// 13. 자바스크립트 원시타입 3가지 이상 : boolean, number, string, null, undefined

// 14. 원시타입과 참조타입의 차이점 : 값을 저장하는지, 값의 주소를 저장하는지?

// 15. 자바스크립트에서 변수에 담겨있는 값의 타입을 알기 위해 사용하는 연산자와 사용하는 방법에 대해 서술
// typeof(변수명);

// 16. 인자로 전달받은 문자열을 자바스크립트 코드로 변환하여 실행하는 전역함수의 명칭과 사용법
// eval(문자열로 된 코드)

// 17. undefined : 변수를 선언하고 값을 할당하지 않으면 자동으로 할당되는 값

// 18. window 객체의 onload 속성에 대해 서술 : 페이지에 load 이벤트가 발생했을 때 호출되는 콜백함수

// 19. 자바스크립트의 브라우저 객체 모델에 속한 객체 3개 이상 : window, location, navigation, history, screen