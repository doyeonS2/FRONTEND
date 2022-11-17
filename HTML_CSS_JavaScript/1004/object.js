// 객체 리터럴로 객체를 생성하는 방법
// let memberInfo = {
//     name: "유나",
//     age: 20,
//     addr: "경기도 수원시",
//     gender: "여성"
// };
// console.log(memberInfo);

// 생성자로 생성하는 방법
// function MemberInfo(name, age, addr, gender) {
//     this.name = name;
//     this.age = age;
//     this.addr = addr;
//     this.gender = gender;
// }
// let memberInfo = new MemberInfo("은종", 27, "충주", "여성");
// console.log(memberInfo);
// let memberInfo1 = new MemberInfo("수빈", 29, "화천", "여성");
// console.log(memberInfo1);

// Object.create로 생성하는 방법
// 지정된 프로토타입 객체와 프로퍼티를 새로운 객체로 만들어줌
let member = Object.create(Object.prototype, {
     name: {
        value: "민현",
        writable: true,
        enumerable: true,
        configurable: true
     },
     age: {
        value: 28,
        writable: true,
        enumerable: true,
        configurable: true
     },
     addr: {
        value: "부산",
        writable: true,
        enumerable: true,
        configurable: true
     },
     gender: { 
        value: "남성",
        writable: true,
        enumerable: true,
        configurable: true
     }
});
// console.log(member);
//--------------------------------------------------------------------
// function Circle(center, radius) { // 함수 선언식
//     this.center = center; // 프로퍼티
//     this.radius = radius;
//     this.area = function() { // 함수 표현식
//         return Math.PI * this.radius * this.radius;
//     }
// }
// let c1 = new Circle(1, 1.0);
// let c2 = new Circle(2, 3.0);
// let c3 = new Circle(3, 4.0);
// console.log(c1.area());

function Circle(center, radius) { // 함수 선언식
    this.center = center; // 프로퍼티
    this.radius = radius;
}
Circle.prototype.area = function() {
    return Math.PI * this.radius * this.radius;
}
let c1 = new Circle(1, 2.0);
let c2 = new Circle(2, 2.0);
let c3 = new Circle(3, 2.0);
console.log(c1.area());

