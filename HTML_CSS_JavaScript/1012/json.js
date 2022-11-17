let memberInfo = [
    {
        name : "윤지성",
        age : 32,
        job : "가수",
        addr : "강원도 원주시"
    },
    {
        name : "하성운",
        age : 29,
        job : "가수",
        addr : "경기도 고양시"
    },
    {
        name : "황민현",
        age : 28,
        job : "가수",
        addr : "부산광역시 수영구"
    }
];
// 원하는 포맷을 제이슨 포맷으로 바꿔주고, 리터럴 객체로 바꿔준다(?)
console.log(memberInfo); // 리터럴 객체
let json = JSON.stringify(memberInfo); // JSON 포맷
// console.log(json);

// 인수로 전달받은 JSON 문자열을 자바스크립트 객체로 변환하여 반환
let objectJson = JSON.parse(json);
console.log(objectJson);
