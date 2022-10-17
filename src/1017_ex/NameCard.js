import { useState } from "react";
import '../App.css';

const NameCard = () => {
    const [name, setName] = useState('');
    const [pos, setPos] = useState('');
    const [addr, setAddr] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');

    const onChangeName = (e) => setName(e.target.value);
    const onChangePos = (e) => setPos(e.target.value);
    const onChangeAddr = (e) => setAddr(e.target.value);
    const onChangeMail = (e) => setMail(e.target.value);
    const onChangePhone = (e) => setPhone(e.target.value);

    return (
        <>
        <div>
            <h2>회원정보 입력</h2>
            <p><input type="text" placeholder="이름" onChange={onChangeName} />
            <button>입력</button></p>
            <p><input type="text" placeholder="직책" onChange={onChangePos} />
            <button>입력</button></p>
            <p><input type="text" placeholder="주소" onChange={onChangeAddr} />
            <button>입력</button></p>
            <p><input type="text" placeholder="메일" onChange={onChangeMail} />
            <button>입력</button></p>
            <p><input type="text" placeholder="전화번호" onChange={onChangePhone} />
            <button>입력</button></p>

        </div>
        <fieldset className="name-card">
        <h1>😊Name Card😊</h1>
        <p className="txt">이름 : {name}</p>
        <p className="txt">직책 : {pos}</p>
        <p className="txt">주소 : {addr}</p>
        <p className="txt">메일 : {mail}</p>
        <p className="txt">전화번호 : {phone}</p>
        </fieldset>
        </>
    );
}
export default NameCard;