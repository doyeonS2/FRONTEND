// //id가 1인 데이터 조회
// fetch("https://jsonplaceholder.typicode.com/posts/")
// .then((response) => response.json())
// .then((json) => console.log(json));

//--------------------------------------------------------------------
// 데이터 생성
// fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     body: JSON.stringify({
//         title: "JSON TEST",
//         body: "JSON과 비동기 통신에 대해서 연습해 봅시다!",
//         userId : 1
//     }),
//     headers: {
//         "content-type": "application/json; charset=UTF-8"
//     }
// })
// .then((rsp) => rsp.json())
// .then((json) => console.log(json));

//--------------------------------------------------------------------
// PUT : 데이터 수정
// fetch("https://jsonplaceholder.typicode.com/posts/1", { // 수정하고자 하는 데이터 지정 : 1번 지정
//     method: "PUT",
//     body: JSON.stringify({
//         id : 1,
//         title: "Fetch API Test",
//         userId: 1
//     }),
//     headers: {
//         "content-type": "application/json; charset=UTF-8"
//     }
// })
// .then((rsp) => rsp.json())
// .then((json) => console.log(json));

//--------------------------------------------------------------------
// DELETE : 데이터 삭제
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
    });


