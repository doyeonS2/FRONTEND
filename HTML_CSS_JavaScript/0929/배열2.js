// 객체 리터럴 : 키와 값으로 구성, 중괄호로 만든다.

// 배열
let score = [88, 77, 65, 86]; // 국어, 영어, 수학, 과학
console.log(score);

// 객체 리터럴로 바꾸면..?
let scoreObject = {
    korScore : 88,
    engScore : 77,
    matScore : 65,
    scnScore : 86
};
console.log(scoreObject);
console.log(scoreObject.korScore);

// 이걸 배열에다가 넣으면..? (배열 내에 객체 리터럴)
let scoreObject2 = [{
    korScore : 88,
    engScore : 77,
    matScore : 65,
    scnScore : 86
}];
console.log(scoreObject2[0].korScore);

let scoreObject3 = [
    {
        korScore : 88,
        engScore : 77,
        matScore : 65,
        scnScore : 86
    },
    {
        korScore : 55,
        engScore : 86,
        matScore : 65,
        scnScore : 93
    }
];
console.log(scoreObject3[1]);
console.log("-----------------------------");

let scoreObject4 = [
    {
        korScore : 88,
        engScore : 77,
        matScore : 65,
        scnScore : 86
    },
    {
        korScore : 55,
        engScore : 86,
        matScore : 65,
        scnScore : 93
    },
    {
        korScore : 99,
        engScore : 98,
        matScore : 100,
        scnScore : 100
    }
];
for(let i = 0; i < scoreObject4.length; i++) {
    console.log(`${i}번째 사람의 국어 성적 : ${scoreObject4[i].korScore}`);
    console.log(`${i}번째 사람의 영어 성적 : ${scoreObject4[i].engScore}`);
    console.log(`${i}번째 사람의 수학 성적 : ${scoreObject4[i].matScore}`);
    console.log(`${i}번째 사람의 과학 성적 : ${scoreObject4[i].scnScore}`);
    console.log("-----------------------------");
}

// 객체 리터럴에 배열을 넣는다면..?

let name = {
    city : ["서울", "부산", "인천", "속초", "청주", "여수"],
    fruit : ["바나나", "사과", "오렌지", "수박", "딸기"]
}
console.log(name);
console.log(name.city);
console.log(name.city[0]);
console.log("-----------------------------");

// 향상된 for문
for (let key in name) {
    console.log(`${key} : ${name[key]}`);
}
console.log("-----------------------------");

// 연산자 : 제곱 연산자 (**)
let num = 10;
console.log(10 ** 10); // 10의 10승
console.log(2 ** 32); // 2의 32승

console.log(num / 3);
console.log(Math.floor(num / 3)); // 소수점 이하 날리기~~~ 유후~~!
console.log(Math.round(num / 3)); 
console.log(num % 3); // 니머지 연산자 
console.log("-----------------------------");

// 대입 연산자와 복합 대입 연산자
let num2 = 10;
console.log(num2 += 2); // num2 = num2 + 2

let num3 = 10;
console.log(num3 *= 2); // num2 = num2 * 2
console.log("-----------------------------");

// 자바에서는 string이 참조변수여서 값이 같은지는 equals, 주소까지 같은지는 == 을 써서 확인했다!
// 자바스크립트는..? 값이 같은지는 == , 자료형까지 같은지는 === 써서 확인!

// 비교연산자
console.log(10 == "10"); // true
console.log(10 === "10"); // false (자료형이 다름) - 값과 형이 모두 같은지 확인!

console.log(10 != "10"); // false, 값만 비교
console.log(10 !== "10"); // true, 값과 형이 모두 같지 않은지 확인하기 때문!

// 형이 달라도 비교 가넝,, 쌉가넝,,ㅎ
console.log(10 > "9"); // true 
console.log(10 > "11"); // false

console.log("Javascript" < "javascript"); // true,, 아스키 코드값으로 비교하면 대문자가 더 앞에 오기 때문.. (A면 65, a면 97)
console.log("-----------------------------");


//---------------------------------------------
// 형 변환 : 묵시적 형 변환, 명시적 형 변환
// 묵시적, 암시적, 자동 형 변환 => 내가 개입하지 않은!!!!!
// 명시적 => 내가 개입한!!!!!!! 내가 바꿔버린!!!!!!!!!!!!!!!!!!!!!!!!!!

let num4 = 10 + "10";
console.log(num4); // 1010 출력, 자동으로 문자형으로 간주

let num5 = 10 + Number("10"); // 문자형을 명시적으로 숫자형으로 변환
console.log(num5); // 20 출력

let name2 = 10 + String(20); // 숫자형을 명시적으로 문자형으로 변환
console.log(name2); // 1020 출력