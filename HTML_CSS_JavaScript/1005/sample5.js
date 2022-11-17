// 메서드 속성으로 조작하기
const aEl = document.querySelector("a");
const href = aEl.getAttribute("href"); // getAttribute : 속성에 대한 값을 가져오는 것(href)
console.log(href);
aEl.setAttribute("href", "http://kakao.com");
aEl.innerText="카카~오!";