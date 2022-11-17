// prompt는 입력, write는 출력
let hour = prompt("시간을 입력하시오");
let min = prompt("분을 입력하시오");

hour = Number(hour);
min = Number(min);
// hour, min = Number(hour, min); // 넘버는 한개씩만 가능하기때문에 따로 써야함

let calc = (hour*60)+min-45;
document.writeln(calc);
document.write(parseInt(calc/60) + "시" + calc%60 + "분");

// -------------------------------------

document.writeln(typeof hour); 
document.writeln(typeof min);

