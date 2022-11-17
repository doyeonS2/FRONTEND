let brands = ["애플", "구글", "페이스북", "테슬라", "삼성전자"];
for(let i = 0; i < brands.length; i++) {
    console.log(brands[i]);
    
}
console.log("------------------------");

// for-in : 배열 뿐만 아니라 오브젝트에서도 사용 가능
let person = {
    fname : "찬호", 
    lname : "정",
    age : 24
};

for(let key in person) {
    console.log(person[key]); // 오브젝트 key에 해당하는 값을 출력
}
console.log("------------------------");

for(let key in person) {
    console.log(`${key}의 값은 ${person[key]}`); // 오브젝트 key에 해당하는 값을 출력
}
console.log("------------------------");

// for-of : 자바의 향상된 for문과 같음
for(let e of brands) console.log(e);
console.log("------------------------");

let lang = "Javascript";
for(let e of lang) console.log(e);
console.log("------------------------");

