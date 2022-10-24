import { useState } from "react";
import axios from "axios";
import KhApi from '../api/khApi'

const memberObj = {
    id: "",
    pwd: "",
    name: "",
    addr: "",
    mail: "",
    phone: ""
};

const MemberReg = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [submit, setSubmit] = useState(false); // 서버로 전송할 수 있는 조건 체크
    const [resData, setResData] = useState(''); // 서버에서 받는 결과 데이터

    // 이벤트 체크 함수 만들기
    const onChangeId = (e) => setId(e.target.value); // 현재 이벤트가 발생한 입력창의 값을 useState에 세팅
    const onChangePwd = (e) => setPwd(e.target.value);
    const onChangeName = (e) => setName(e.target.value);
    const onChangeMail = (e) => {
        setMail(e.target.value);
        isSubmit();
    }

    // 서버에게 회원 가입 정보를 전송할지에 대한 여부 판단
    const isSubmit = () => {
        if(id && pwd && name && mail) setSubmit(true);
    }

    // 전송 버튼이 눌려지면 동작하는 함수, 함수가 비동기 통신을 해야 하므로 async 키워드 추가
    const onSubmit = async () => {

        try {
            // 서버에 대한 요청을 비동기로 처리 함
            const res =  await KhApi.memberReg(id, pwd, name, mail);
            //const res = KhApi.userLogin(111, 11);
            setResData(res.data);

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <h1>회원 정보 설정</h1>
            <br/>
            <input type="text" placeholder='아이디 입력' value={id} onChange={onChangeId} />
            <br />
            <input type="password" placeholder='패스워드 입력' value={pwd} onChange={onChangePwd} />
            <br />
            <input type="text" placeholder='이름 입력' value={name} onChange={onChangeName} />
            <br />
            <input type="email" placeholder='메일 입력' value={mail} onChange={onChangeMail} />
            <br />
            {submit && <button onClick={onSubmit}>전송</button>}
            {resData &&  resData.map(list =>(
                <>
                <p key={list.index}>이름 : {list.name}</p> 
                <p key={list.index}>이메일 : {list.email}</p>
                </>
            ))}
        </div>
    );
};

export default MemberReg;