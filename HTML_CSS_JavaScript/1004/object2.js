// 프로토타입 상속
// 자바스크립트는 프로토타입 상속에 기반을 둔 객체 지향 언어입니다.
// let objA = {
//     name: "성운",
//     sayHello: function() {
//         console.log("Hello!" + this.name);
//     }
// }
// let objB = {
//     name: "진영"
// };
// objB.__proto__ = objA;
// let objC = {};
// objC.__proto__ = objB;
// objC.sayHello();

// //---------------------------------------------

// let person = {
//     name: {
//         firstName : "성우",
//         lastName : "옹"
//     },
//     age: 28,
//     isAdult : true,
//     printInfo() {
//         return this.name;
//     }
// };
// 객체에 대한 속성(프로퍼티, 함수)에 대한 접근은 (.)연산자를 사용하거나, [] 사용
// console.log(person.printInfo());
// console.log(person.name);
// console.log(person["name"]);

// 객체의 속성값 변경하기
// person.name.firstName = "도연";
// person.name.lastName = "김";
// console.log(person.name);

//------------------------------------------------------

// 객체 속성을 동적으로 추가하기
// const carInfo = {} // 빈 객체 생성
// carInfo.name = "또붕이";
// carInfo.year = "2017/08/09";
// carInfo.maxSpeed = "200KM"
// console.log(carInfo.name);
// console.log(carInfo);

// 객체 속성을 동적으로 삭제하기
// delete carInfo.year;
// console.log(carInfo);

//----------------------------------------------
// 깊은 복사 : 값 자체가 복사되는 것
// 얕은 복사 : 주소를 복사

// 자바스크립트의 깊은 복사 : 기본자료형에서는 변수 자체에 값이 저장됨
// 기본자료형끼리 복사를 하면 깊은 복사

// let num = 10; // Number형이기 때문에 변수에 값이 저장됨
// let copyNum = num; // 깊은 복사 
// console.log(typeof(copyNum));

// 자바스크립트의 얕은 복사 : 참조자료형에서는 변수 공간에 데이터가 저장되는 것이 아니고,
// 데이터가 위치한 주소가 저장됨 
// 참조자료형을 복사하면 값이 아닌 주소가 복사되기 때문에 얕은 복사가 일어남

// const car = {
//     name: "제네시스"
// };
// car = {
//     name: "벤츠"
// }; // 안됨

// const car = {
//     name: "소나타"
// };
// car.name = "싼타페";
// console.log(car.name); // 됨(주소가 아니라 값은 변경할 수 있다!)

//-----------------------

// let car = {
//     name: "모닝"
// };
// let car2 = car; // 얕은 복사(주소를 복사함 -> car와 car2의 주소가 같아짐)
// car.name = "스파크"; // 이름을 바꿈
// console.log(car2.name); // 바꾼 이름이 출력

//-------------------------------------------------------------

// 표준 내장 객체 : 자바스크립트에서 개발 편의를 위해 수많은 객체가 미리 만들어져 있음
// 스코프에 상관없이 모든 영역에서 공통으로 사용할 수 있습니다.
const pw = "123";
if(pw.length < 4) { // 문자열 길이 발견
    console.log(pw.length + "비밀번호는 최소한 4자리 이상으로 입력하세요.");
}

// 특정 문자열 포함 여부 확인 : 
// include() : true/false
const email = "test!name.com";
if(email.includes("@") === false) {
    console.log("올바른 이메일 형식이 아닙니다.");
}

// indexOf() : 해당 문자열의 인덱스를 반환, 없으면 -1
const email2 = "test!name.com";
if(email2.indexOf("@") === -1) {
    console.log("올바른 이메일 형식이 아닙니다!!!!!!!");
}

// slice() : 시작 위치외 종료 위치를 지정하면 문자열에서 해당 부분 잘라서 반환
// let str = "Apple, Banana, Kiwi";
// let result = str.slice(7, 13); // 해당 인덱스부터 지정 인덱스 미만까지
// console.log(result);

// substring() : 시작 위치와 종료 위치를 지정하면 잘라서 반환
// let str = "Apple, Banana, Kiwi";
// let result = str.substring(7, 13); // 해당 인덱스부터 지정 인덱스 미만까지
// console.log(result);

// replace() : 문자열 내의 특정 문자열을 지정한 문자열로 변경
let str = "지구오락실, 이영지, 안유진, 미미, 나영석";
let newStr = str.replace("나영석", "이은지");
console.log(newStr);

// toUpperCase(), toLowerCase() : 대문자, 소문자 변경

// concat() : 2개 이상의 문자열을 하나의 문자열을 합치는 함수
// let txt1 = "Hello~";
// let txt2 = "KH정보교육원~!";
// let txt3 = txt1 + " " + txt2;
// console.log(txt3);

let txt1 = "Hi~";
let txt2 = "KH정보교육원^^";
let txt3 = txt1.concat(" ", txt2);
console.log(txt3);

// trim() : 문자열 앞, 뒤의 공백 제거
let str1 = "           여기는 KH정보 교육원        ";
console.log(str1.trim());

// padStart(), padEnd() : 문자열 앞과 뒤에 지정된 문자를 지정된 길이만큼 추가
let str2 = "55";
str2 = str2.padStart(4, 0); // 총 길이를 정하고 입력받은 문자열에서 남는 공간을 채움
console.log(str2);

// charAt() : 문자열에서 특정 인덱스에 해당하는 문자를 반환하는 함수
let addr = "서울시 강남구 역삼동 KH정보교육원";
console.log(addr.charAt(2));
console.log(addr.charCodeAt(12)); // 해당 유니코드 값 반환

// Split() : 특정 문자 기준으로 문자열을 분리
let birthday = "1992-09-11";
let arr = birthday.split("-");
console.log(arr);