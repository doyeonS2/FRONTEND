// document.write : 웹 화면에서 출력 (사용자에게 알려줄 때)
// console.log : VScode 콘솔 창에서 출력 (디버깅 용도일 때)

//-----------------------------------------------------------------

// const pie = 3.14;
// console.log(pie *20);
// console.log("안녕하세요.");
// alert("경고");

// let rst = confirm("컬러를 변경하실건가용?.?")
// console.log(rst);

// let name = prompt("이름 입력 : ");
// document.write("<h1>" + name + "<h1>");

// let sum = 0;

// let tmp = prompt("정수 입력 : ");
// let num = Number(tmp);

// for(let i = 0; i < num; i++) {
//     sum += i;
// }

// document.write("<h3> 입력 받은 정수의 합 : " + sum + "입니다.<h3>")

// let name = "경기도 용인시~!";
// document.getElementById("data").innerHTML = name;

// JavaScript
function primeMain() {
  var sum = 0;
  var number = document.getElementById('name').value;
  for (var i = 0; i <= number; i++) {
    sum += primeNumber(i);
  }   
  document.write("= " + sum);
  return 0;
}
function primeNumber(number) {
  var cnt = 0;
  for (var i = 1; i <= number; i++) {
    if (number % i == 0) {
      cnt++;
    }
  }
  if (cnt == 2) {
    document.write(number + " + ");
    return number;
  } else {
    return 0;
  }
}