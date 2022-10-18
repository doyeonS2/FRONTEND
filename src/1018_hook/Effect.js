import { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log("렌더링이 완료되었습니다."); 
        console.log({name, nickname});
    }, [name]); // , [] 넣으면 마운트 되는 시점만 useEffect를 불러줌! [] 안 공백이면 둘 다,  [name]이면 name만 즉각 렌더링
    const onChangeName = e => {
        setName(e.target.value);
    }
    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return(
        <div>
            <div>
              <input value={name} onChange={onChangeName}/>
              <input value={nickname} onChange={onChangeNickname}/>
            </div>
            <div><b>이름 : </b>{name}</div>
            <div><b>닉네임 : </b>{nickname}</div>
        </div>

    )
}

export default Info;