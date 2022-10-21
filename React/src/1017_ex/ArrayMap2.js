
// const ArrayMap2 = () => {
//     const seasons = ["새로운 봄", "활기찬 여름", "풍성한 가을", "쓸쓸한 겨울"];
//     const seasonList = seasons.map(e => <li>{e}</li>);
//     return <h1>{seasonList}</h1>

import { useState } from "react";
import '../App.css';

// }
// export default ArrayMap2;


// const ArrayMap2 = () => {
//     const seasons = ["새로운 봄", "활기찬 여름", "풍성한 가을", "쓸쓸한 겨울"];
//     const seasonList = seasons.map((season, index) => <p key={index}>{season}</p>); // key값 = 유일한 값
//     return <h1>{seasonList}</h1>

// }
// export default ArrayMap2;

// 동적으로 변하는 배열 사용, id는 자동으로 증가
const ArrayMap2 = () => {
    const [names, setNames] = useState ([
        {id: 1, text: "청소하기"},
        {id: 2, text: "점심먹기"},
        {id: 3, text: "산책하기"},
        {id: 4, text: "공부하기"}
    ]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);
    const onChange = e => setInputText(e.target.value); // 인풋창에서 입력 받는 값
    const onClick = () => { // 클릭하면 추가!
        const nextNames = names.concat({ // concat : 이어붙이기
            id: nextId,
            text: inputText // 5번이 만들어짐
        });
        console.log(nextId);
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };
    // const namesList = names.map(name => <li key={name.id}>{name.text}</li>);

    const onRemove = id => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const namesList = names.map(name => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>{name.text}</li>
    ));

    const onKeyPress = e => {
        if(e.key === "Enter") {
            onClick();
        }
    }

    return (
        <div>
            <p className="title-name">to do List</p>
            <p>삭제는 해당 항목을 더블클릭하세요.</p>
            <input value={inputText} onChange={onChange} onKeyPress={onKeyPress} />
            <button onClick={onClick}>추가</button>
            <ul>{namesList}</ul>
        </div>
    );

}
export default ArrayMap2;