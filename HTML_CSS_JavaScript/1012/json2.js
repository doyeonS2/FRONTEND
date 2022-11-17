const xhr = new XMLHttpRequest(); // 객체를 만듦
// open 메소드는 서버로 보낼 Ajax 요청의 형식을 설정(get은 리소스 요청)
xhr.open("POST", "https://jsonplaceholder.typicode.com/posts"); // http method(http요청방식), url정의(서버)
xhr.setRequestHeader("content-type", "application/json"); // 요청 헤더 값을 설정


const data = {
    id : 100,
    title : "JSON 전송 테스트",
    author : "도라에몽"
};
xhr.send(JSON.stringify(data)); // 요청 정보
// xhr.send();



xhr.onload = () => { // onload 메소드가 불려짐
    if(xhr.status === 201) { // 정상적인 응답
        // 데이터를 까봄(?) 정상적인 데이터인지?
        const res = JSON.parse(xhr.response); // JSON 데이터를 객체로 변경
        console.log(res);
    } else {
        console.log(xhr.status, xhr.statusText); // 응답 상태와 응답 메시지 확인
    }
} 