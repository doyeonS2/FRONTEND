// 연습문제 - 주민등록번호를 입력 받아 성별, 나이 출력하기
// - 문자열을 자르는 substr사용
// - 날짜 계산을 위해 Date 내장 객체 사용
// - 주민등록번호 입력 길이 체크
// - 하이픈 포함 여부 체크 (indexOf)
// - HTML + CSS로 이쁘게 출력 하기
//------------------------------

// 해야할 거? 
// 길이 체크, 하이픈이 있는지 체크!

let jumin; // 주민이라는 변수를 하나 만들기

while(true) { 
    jumin = prompt("주민등록번호 입력 : ", "");

    if(jumin.length != 14) alert("입력 오류 : 다시 입력하세요.");
    else {
        // indexof : 특정 문자가 있는지? 없는지? 확인, 없으면 -1 반환
        if(jumin.indexOf("-") == -1) alert("하이픈이 누락되었습니다."); 
        else break;
    }
}

// 성별 확인 123456-1234567
let gender = jumin.charAt(7); // 0부터 시작이기 때문에 7
let genderStr; // 여성, 남성을 저장할 변수
if(gender == "2" || gender == "4") genderStr = "여성";
else genderStr = "남성";

// 태어난 연도 

// 주민등록번호에서 맨앞에 있는 2자리를 잘라냄
let birthYear = jumin.substring(0, 2) // 몇년도에 태어났는지? substring 사용해서 0부터 2개(0 ~ 1) 반환

if(gender == "1" || gender == "2") { // gender가 1 또는 2이면 19xx년에 출생
    birthYear = "19" + birthYear;
} else birthYear = "20" + birthYear; // 20xx년도 출생

birthYear = Number(birthYear); // 계산을 위해 태어난 연도 문자열을 숫자로 변경

// 나이 = 현재 연도 - 태어난 연도 

// 현재 연도
const date = new Date(); // 날짜 객체 만들기
const currYear = date.getFullYear(); // 2022 

// 나이
let age = currYear - birthYear;

document.write("<p class='box'> 성별 : " + genderStr + "<br>" + "나이 : " + age + "</p>");



