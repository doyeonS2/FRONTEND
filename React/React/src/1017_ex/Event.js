import {useState} from "react";
const Event = () => {
    const [message, setMessage] = useState(''); // 정해진 폼 => 바꾸면안됨!! hook 걸어서 사용하겠다!!
    const [color, setColor] = useState("black");
    const onClickEnter = () => setMessage("안녕하세요!!!") // onClick 이벤트 발생 시 호출될 함수
    const onClickLeave = () => setMessage("안녕히가세요!!!")

    return( // 렌더링 부분
    <>
    {/* <button onclick="onClickEnter()">입장</button> => html과 자바스크립트에서 쓰던 event 방법 */}
    {/* 리액트에서는 아래 문법처럼 변경(카멜표기법! 쌍따옴표대신 중괄호에 함수 이름을 쓰면 됨) */}
    <button onClick={onClickEnter}>입장</button> 
    <button onClick={onClickLeave}>퇴장</button>
    {/* style을 넣을 때는 중괄호로 한 번 더 감싸줘야 함 */}
    <h1 style={{color}}>{message}</h1>
    <button style={{color:"red"}} onClick = {()=>setColor("red")}> 빨간색</button>
    <button style={{color:"green"}} onClick = {()=>setColor("green")}>초록색</button>
    <button style={{color:"blue"}} onClick = {()=>setColor("blue")}> 푸른색</button>
    </>

    );
}

export default Event;