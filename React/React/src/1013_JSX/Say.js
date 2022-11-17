// 리액트의 가장 중요한 부분^^ 리액트의 핵심!!!!!!!!!!!!!!!!!!!🤩
import {useState} from 'react';


const Say = () => {
    const [message, setMessage] = useState('');
    const onClickEnter = () => setMessage("안녕하세욤^_^");
    const onClickLeave = () => setMessage("안녕히가세욤ㅠ_ㅜ");
    const [color, setColor] = useState('black');

    let prnMsg = "없음";
    const testClick = () => {
        prnMsg = "HI HELLO 안녕?";
        // 개발자모드 콘솔 창에 보면 바뀌어져 있으나, 웹 화면에는 출력되지 않음(?) => 화면 렌더링 해줘야 함! 화면 갱신 때문에 필요......? 
        // useState가 왜 필요한지? 화면 업데이트라는 중요한.....!@#$%^&*,, useState 화면 리렌더링때문에 꼭 써야한다!
        console.log(prnMsg);

    }

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <button onClick={testClick}>테스트메시지</button>
            <h1 style={{color}}>{message}</h1>
            <p> ↓ "무지개색 버튼 눌러보세용~~😊" ↓ </p>
            <button style={{color: 'red'}} onClick={()=>setColor('red')}>빨간색</button>
            <button style={{color: 'orange'}} onClick={()=>setColor('orange')}>주황색</button>
            <button style={{color: 'yellow'}} onClick={()=>setColor('yellow')}>노란색</button>
            <button style={{color: 'green'}} onClick={()=>setColor('green')}>초록색</button>
            <button style={{color: 'blue'}} onClick={()=>setColor('blue')}>파란색</button>
            <button style={{color: 'navy'}} onClick={()=>setColor('navy')}>남색</button>
            <button style={{color: 'purple'}} onClick={()=>setColor('purple')}>보라색</button>

        </div>
    )
}
export default Say;