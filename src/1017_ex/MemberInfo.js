import { useState } from "react";

const memberObj = {
    name : "",
    position : "",
    address : "",
    eMail : "",
    phone : ""
};

const NameCard = () => {
    return (
        <>
            <h3>명함 정보 출력</h3>
            <p>이름 : {memberObj.name}</p>
            <p>직책 : {memberObj.position}</p>
            <p>주소 : {memberObj.address}</p>
            <p>메일 : {memberObj.eMail}</p>
            <p>폰   : {memberObj.phone}</p>
        </>
    );
};

const MemberInfo = () => {
    const [name, setName] = useState('');
    const [pos, setPos] = useState('');
    const [addr, setAddr] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [submit, setSubmit] = useState(false);

    const onChangeName = (e) => setName(e.target.value);
    const onChangePos = (e) => setPos(e.target.value);
    const onChangeAddr = (e) => setAddr(e.target.value);
    const onChangeMail = (e) => setMail(e.target.value);
    const onChangePhone = (e) => setPhone(e.target.value);

    const onClickName = () => memberObj.name = name;
    const onClickPos = () => memberObj.position = pos;
    const onClickAddr = () => memberObj.address = addr;
    const onClickMail = () => memberObj.eMail = mail;
    const onClickPhone = () => memberObj.phone = phone;

    const onSubmit = () => {
        console.log(memberObj);
        setSubmit(true);
    }

    return (
        <div>
            <h1>회원 정보 가입</h1>
            <input type="text"  placeholder="이름 입력" value={name} onChange={onChangeName} />
            <button onClick={onClickName}>이름</button>
            <br />
            <input type="text" placeholder="직책 입력" value={pos} onChange={onChangePos} />
            <button onClick={onClickPos}>직책</button>
            <br />
            <input type="text" placeholder="주소 입력" value={addr} onChange={onChangeAddr} />
            <button onClick={onClickAddr}>주소</button>
            <br />
            <input type="text" placeholder="메일 입력" value={mail} onChange={onChangeMail} />
            <button onClick={onClickMail}>메일</button>
            <br />
            <input type="text" placeholder="폰 입력" value={phone} onChange={onChangePhone} />
            <button onClick={onClickPhone}>폰</button>
            <br />
            <button onClick={onSubmit}>제출</button>
            {/* &&: 둘 다 참, submit이 참이면 NameCard를 실행! */}
            {submit && <NameCard />}
        </div>        
    )
}

export default MemberInfo;