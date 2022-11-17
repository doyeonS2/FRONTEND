// let str = "Hello world!!! world!!!"; // 입력받은 문자열
// const regEx = /world/; // 검사할 정규식
// console.log(regEx.test(str)); // 대응되는 문자열 포함 여부 확인
// console.log(str.search(regEx)); // 해당 문자열 인덱스 반환 (없으면 -1 반환)

// exec() 메소드 : 인수로 전달된 문자열에서 특정 패턴을 검색하여 패턴과 일치하는 문자열 반환
// let inputStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// let regEx = /가장+/;
// let result = regEx.exec(inputStr);

// console.log(result);

//-------------------------------

// let inputStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// let regEx = /가장/g;
// let result = regEx.exec(inputStr);

// console.log(result[0]);

// let inputStr = "가장 큰 실수는 포기, 가장 어리석은 일은 남의 결점 찾기, 가장 좋은 선물은 용서";
// let regEx = /가장큰/g;
// let result = regEx.exec(inputStr);

// console.log(result1); // 찾는 문자열이 없으면 null 반환

//-------------------------------

// 전화번호 검사하기
// // \d : 숫자로 시작, {3} : 숫자 3개 이상
// let inputNum = "010-5006-4146";
// const redEx = /\d{3}-\d{4}-\d{4}/; // 숫자3-숫자4-숫자4
// // const redEx = /\d{3, 3}-\d{4}-\d{4}/; // 최소 숫자
// let rst = inputNum.test(redEx);
// console.log(rst);

// let inputNum = "강사님 전화번호는 010-5006-4146 입니다.";
// const redEx = /\d{3}-\d{4}-\d{4}/; 
// let rst = inputNum.match(redEx);
// console.log(rst[0]); // 전화번호만 뽑아서 출력

let inputNum = "Hello, KH 강사님 전화번호는 5456456465 010-5006-4146, 010-1234-5678 입니다.";
// const redEx = /\d{3}-\d{4}-\d{4}/g; // g옵션은 매칭되는 항목을 모두 찾음
// let rst = inputNum.match(redEx);
// // console.log(rst); // 전화번호 여러 개 뽑아서 출력
// for(let e of rst) console.log(e);

//-------------------------------

// 간단한 매칭
// const regEx = /강사님/;
// let rst = inputNum.match(regEx);
// console.log(rst[0]);

// const regEx = /010/g;
// let rst = inputNum.match(regEx);
// console.log(rst);

// const regEx = /[0-9]/g; // 모든 숫자 찾기
// let rst = inputNum.match(regEx);
// for(let e of rst) console.log(e);

// const regEx = /[a-zA-Z]/g; // 모든 알파벳 찾기
// let rst = inputNum.match(regEx);
// for(let e of rst) console.log(e);

const regEx = /[^0-9]/g; // 숫자가 아닌 모든 문자 찾기
let rst = inputNum.match(regEx);
for(let e of rst) console.log(e);