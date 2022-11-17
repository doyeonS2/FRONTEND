// 문제
// 상근날드에서 가장 잘 팔리는 메뉴는 세트 메뉴이다. 주문할 때, 자신이 원하는 햄버거와 음료를 하나씩 골라, 
// 세트로 구매하면, 가격의 합계에서 50원을 뺀 가격이 세트 메뉴의 가격이 된다.
// 햄버거는 총 3종류 상덕버거, 중덕버거, 하덕버거가 있고, 음료는 콜라와 사이다 두 종류가 있다.
// 햄버거와 음료의 가격이 주어졌을 때, 가장 싼 세트 메뉴의 가격을 출력하는 프로그램을 작성하시오.

// 입력
// 입력은 총 다섯 줄이다. 첫째 줄에는 상덕버거, 둘째 줄에는 중덕버거, 셋째 줄에는 하덕버거의 가격이 주어진다. 
// 넷째 줄에는 콜라의 가격, 다섯째 줄에는 사이다의 가격이 주어진다. 모든 가격은 100원 이상, 2000원 이하이다.

// 출력
// 첫째 줄에 가장 싼 세트 메뉴의 가격을 출력한다.
//-------------------------------------------------------------------------

let tmp;
let menu = [];

tmp = prompt("상덕버거 가격 : ", ""); 
menu[0] = Number(tmp);
tmp = prompt("중덕버거 가격 : ", ""); 
menu[1] = Number(tmp);
tmp = prompt("하덕버거 가격 : ", "");
menu[2] = Number(tmp);
tmp = prompt("콜라 가격 : ", ""); 
menu[3] = Number(tmp);
tmp = prompt("사이다 가격 : ", "");
menu[4] = Number(tmp);

// while(true) {
//     if(tmp < 100 || tmp > 2000) {
//         alert("가격을 잘못 입력하셨습니다."); break;
//     } 
// };

let minB = menu[0];
let minD = menu[3];

for(let i = 0; i < menu.length; i++) {
    if(i <= 2 && minB > menu[i]) minB = menu[i];
    if(i >= 3 && minD > menu[i]) minD = menu[i];
};
document.write("<br><h1>MENU</h1>");
document.write("<br>상덕버거 가격 : " + menu[0]);
document.write("<br>하덕버거 가격 : " + menu[1]);
document.write("<br>중덕버거 가격 : " + menu[2]);
document.write("<br>콜라 가격 : " + menu[3]);
document.write("<br>사이다 가격 : " + menu[4]); 
document.write("<br><h2>가장 싼 세트 메뉴 가격 : " + (minB + minD - 50) + "</h2>");



