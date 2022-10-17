import { useState } from "react";

const EventInput = () => {
    const [message, setMessage] = useState('안녕하세요');
    const changeMsg = (e) => {
        setMessage(e.target.value); // input 창으로 들어오는 값을 의미
    }

    return(
        <div>
            <h1>이벤트 연습</h1>
            <input type="type" placeholder="아무거나 입력하세요" onChange={changeMsg} />
            <h2>입력 받은 메시지 : {message}</h2>
        </div>
    );
}
export default EventInput