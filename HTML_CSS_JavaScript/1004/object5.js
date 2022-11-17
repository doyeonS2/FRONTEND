// 수학 연산을 다루는 Math 객체
const floatNum = 10.49;
console.log(Math.floor(floatNum)); // 소수점 이하를 내림
console.log(Math.ceil(floatNum)); // 소수점 이하를 올림
console.log(Math.round(floatNum)); // 소수점 반올림

// Math.random() : 0보다 크고 1보다 작은 숫자형 값을 반환함
while(true) {
    let rand = Math.floor(Math.random() * 10) + 1; // 1 ~ 10 사이의 난수
    console.log("생성된 랜덤값은 " + rand);
    if(rand == 10) break;
}
