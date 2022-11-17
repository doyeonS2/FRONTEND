// Number 객체 : 숫자 관련 작업을 위해 사용되는 메소드
console.log(Number.parseFloat("12")); // 문자열을 실수로 변환
console.log(Number.parseFloat("12.33"));

console.log(Number.parseFloat("12.33")); // 문자열을 정수로 변환
console.log(Number.parseFloat("kk 11")); // NaN(Not a number의 약자)

// 배열을 다루는 Array 객체
// 비파괴적인 메서드인 forEach()
const arr = [10, 20, 30, 40, 50];
arr.forEach(function(e){
    console.log(e);
});

const arr1 = [10, 20, 30, 40, 50];
arr1.forEach(x =>console.log(x));

// toString(): 배열 안의 문자를 쉼표를 이용해 모두 결합해서 하나의 문자열로 반환
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.toString());

// join() : 배열 안의 모든 문자열을 지정한 문자를 이용해 결합
let fruits1 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits1.join("/")); // 비파괴적인 메소드(원본이 변경되지 않음)
console.log(fruits1);

// pop(): 배열에서 마지막 데이터를 제거하고 반환(스택)
let fruits2 = ["Banana", "Orange", "Apple", "Mango"]; 
console.log(fruits2.pop()); // 파괴적(원본이 바뀜)
console.log(fruits2);

// push() : 새로운 요소 추가(스택)
let fruits3 = ["Banana", "Orange", "Apple", "Mango"]; 
fruits3.push("Kiwi");
console.log(fruits3);

// shift() : 배열의 첫번째 요소를 제거하고 반환
let fruits4 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits4.shift());
console.log(fruits4);

// unshift() : 배열의 첫번째 요소에 값을 추가하고 배열의 길이를 반환
let fruits5 = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits5.unshift("Lemon"));
console.log(fruits5);

// 배열 요소의 변경
for(let i = 0; i < fruits.length; i++) {
    fruits[i] = "사과";

    console.log("for문 순회 " + fruits[i]);
}
// 자바의 향상된 for문과 동일 : 요소의 값을 변경해도 원본 배열은 변경되지 않음
for(let e of fruits) {
    e = "딸기"; // 요소의 값 변경
    console.log(e);
} 

for(let e of fruits) {
    console.log(e); // 원본 배열은 변경되지 않음
}

// 배열 concat() : 2개 이상의 배열을 하나의 배열로 결합
let arr2 = ["사과", "딸기", "참외"];
let arr3 = ["포도", "수박", "바나나"];
let arr4 = ["키위", "망고", "오렌지"];
let arr5 = ["복숭아", "자두", "멜론"]
let totFruits = arr2.concat(arr3, arr4, arr5);
console.log(totFruits);

// slice() : 해당 인덱스부터 끝까지 ~~~
// 매개변수가 두개이면 시작 인덱스부터 종료 인덱스번호까지 잘라냄
let fruits6 = ["사과", "딸기", "포도", "수박", "참외"];
console.log(fruits6.slice(3)); 
console.log(fruits6.slice(2, 4)); // 시작 인덱스에서 종료 인덱스 미만까지 

// sort() : 정렬(기본적으로는 오름차순 정렬을 함)
let fruits7 = ["Apple", "Banana", "Kiwi", "Mango", "Orange"];
console.log(fruits7.sort()); // 오름차순
console.log(fruits7.sort()); // 내림차순

// filter() : 비파적인 메소드, 조건에 맞는 값을 추출해 새로운 배열 생성
let persons = [
    {
        name: "유재석",
        point: 78,
        city: "서울"
    },
    {
        name: "김종국",
        point: 92,
        city: "서울"
    },
    {
        name: "양세찬",
        point: 76,
        city: "제주"
    },
    {
        name: "하하",
        point: 81,
        city: "경기도"
    },
];

// let pass = persons.filter(e => e.point > 80); // e: 요소선택자
// console.log(pass);

let pass = persons.filter(e => e.city === "서울"); // e: 요소선택자
console.log(pass);


