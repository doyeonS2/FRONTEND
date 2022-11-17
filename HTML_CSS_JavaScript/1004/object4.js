// 날짜와 시간을 다루는 Date 객체
const date = new Date();
console.log(date); // 영국 기준으로 해서 9시간 차이남(웹 브라우저 F12 개발자모드로 보면 우리나라 기준으로 찍힘)

const date1 = new Date(2022, 10, 04); 
console.log(date1);

const date2 = new Date(2022, 10, 04, 16, 20, 50);
console.log(date2);

// 가급적이면 밑에 있는 두 방법으로 사용하기(원하는 달로 입력되기 때문!)
const date3 = new Date("2022-10-04"); // 원하는 달로 입력됨
console.log(date3);
const date4 = new Date("2022/12/25/18:30:50"); // 원하는 달로 입력됨
console.log(date4)

// 연도 출력
console.log(date4.getFullYear());

// 월 출력
console.log(date4.getMonth()); // 배열의 인덱스로 반환됨을 유의(+1을 해야 원하는 월!)

// Set 객체 : 중복 허용하지 않는 특성을 가짐
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(1);
console.log(mySet.size);
console.log(mySet);
mySet.forEach(e => console.log("mySet forEach : " + e));

// Map 객체 : 키와 값을 맵핑시켜서 값을 저장하고 저장된 순서대로 요소에 접근
let map = new Map();
map.set("name", "윤지성");
map.set("email", "yoonj1@gmail.com");
map.set("age", 32);
map.set("addr", "강원도 원주시");

console.log(map.size);
console.log(map.get("name")); // 키에 대한 값을 반환
console.log(map.has("email")); // 존재 여부 확인
map.delete("name");

map.forEach(e => console.log(e));
