// 조건문 : 조건식의 결과가 참인 경우 수행
// if(조건식) { 참인 경우 수행되는 명령문 }
// if(조건식) { 참 } else { 거짓 }

let num = 10;
if(num >= 0) console.log("양수입니다.");
else console.log("음수입니다.");

if(num > 10) console.log(num + "은 10보다 커요.");
else if(num < 10) {
    console.log(num + "은 10보다 작아요..(?)");
} else {
    console.log(num + "은 10과 같아요.");
}

// switch문
let a, b, op, tmp;
tmp = prompt("값 입력 : " + "");
a = Number(tmp);
op = prompt("연산자 입력 : " + ""); // op는 숫자가 아니기 때문에 그냥 받아야 함
tmp = prompt("값 입력 : " + "");
b = Number(tmp);

switch(op) {
    case "+" :
        document.write("<h2>덧셈 : " + (a + b) + "</h2>");
        break;
    case "-" :
        document.write("<h2>뺄셈 : " + (a - b) + "</h2>");
        break;
    case "*" :
        document.write("<h2>곱셈 : " + (a * b) + "</h2>");
        break;
    case "/" :
        document.write("<h2>나눗셈 : " + (a / b) + "</h2>");
        break;
    default :
        document.write("<h2>계산식 오류</h2>");
}
