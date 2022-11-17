// 배열 기본 : 대괄호로 묶어서 생성한다.
// 배열의 접근은 인덱스로 한다. (0부터 시작)
let score = [80, 99, 77, 65];
console.log(score); // 전부 다 찍힘
console.log(score[1]); // 99가 찍힘(배열은 0부터 시작하기 때문!)
console.log(typeof(score));


for(let i = 0; i < score.length; i++) {
    console.log(`배열의 ${i}번째 값은 ${score[i]} 입니다.`);
}

// 자바의 배열과 다른 점 : 여러가지 자료형을 포함할 수 있다. 배열 내에 배열을 넣을 수 있다.
let array = ["아이브", "장원영", 20, true, [100, 88, 99], ["블랙핑크", "아이브", "뉴진스", "에스파", "있지", "르세라핌"]]; // 서로 다른 타입의 자료형도 들어올 수 있음!
console.log(array[4]);
console.log(array[4][1]); // 4번에서 1번이기 때문에 '88' 출력됨!
console.log(array[0][2]); // 0번에서 2번이기 때문에 '브' 출력됨!
console.log(array[5][5]); // 5번 인덱스에서 5번이기 때문에 '르세라핌' 출력!
console.log(array[5][5][2]); // 5번에서 5번이고 거기서 또 5번이기 때문에 '라' 출력!
console.log(array[4][0][1]); // 숫자는 그 자체가 하나이기 때문에 출력 안 됨!
console.log(array[4][0]); // '100' 출력!

array[0] = "아이즈원";
console.log(array);

let name = "엔믹스";
console.log(typeof(name)); // string

const name2 = "실버벨"; // const : 내부의 값이 바뀌면 안됨!! 주소가 안바뀌면 상관없음!!
name2 = "골든벨";  // 값이 안 바뀌긴하는데....... 왜 줄이 안가지?////////////////////?
console.log(name2);

const array = ["아이브", "장원영", 20, true, [100, 88, 99], ["블랙핑크", "아이브", "뉴진스", "에스파", "있지", "르세라핌"]];
// const가 상수기 때문에 상수 객체의 값 변경하고 추가할 수 있지만, 상수 객체 자체를 재정의할 수는 없다.