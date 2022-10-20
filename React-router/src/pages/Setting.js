import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

// 회원정보를 저장할 수 있는 리터럴 객체
const memberObj = {
    id: "",
    pwd: "",
    name: "",
    addr: "",
    mail: "",
    phone: "",
}

const Setting = () => {
    const [id, setId] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [addr, setAddr] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [submit, setSubmit] = useState(false); // 서버로 전송할 수 있는 조건 체크(정보가 다 입력되어야지만 전송할 수 있음)
    const [resData, setResDate] = useState(''); // 서버에서 받는 결과 데이터(응답 데이터)

    // 이벤트 체크 함수 만들기
    // onChange : 인풋 창의 값이 바뀌면 onChange 함수 발생시켜서 useState에 세팅됨
    const onChangeId = (e) => { setId(e.target.value); isSubmit(); } // 현재 이벤트가 발생한 입력창의 값을 useState에 세팅 // input창이 입력되면 isSubmit 실행
    const onChangePwd = (e) => { setPwd(e.target.value); isSubmit(); }
    const onChangeName = (e) => { setName(e.target.value); isSubmit(); }
    const onChangeAddr = (e) => { setAddr(e.target.value); isSubmit(); }
    const onChangeMail = (e) => { setMail(e.target.value); isSubmit(); }
    const onChangePhone = (e) => { setPhone(e.target.value); isSubmit(); }

    // 서버에게 회원 가입 정보를 전송할지에 대한 여부 판단
    const isSubmit = () => {
        // 값이 있으면 true, Null이면 false!
        if(id && pwd && name && addr && mail && phone) setSubmit(true);
    }

    // 전송 버튼이 눌러지면 동작하는 함수, 함수가 비동기 통신을 해야 하므로 async 키워드 추가(서버에 갔다올 때 화면이 멈추지 않게 하기 위함)
    const onSubmit = async () => { // async : 내부 처리를 간결하기 위함
        memberObj.id = id; // useState를 통해서 만들어진 값을 객체에 넣음
        memberObj.pwd = pwd;
        memberObj.name = name;
        memberObj.addr = addr;
        memberObj.mail = mail;
        memberObj.phone = phone;

        // 서버에 날려주기?
        try {
            // 서버에 대한 요청을 비동기로 처리함
            const res = await axios.post("http://localhost:3000/posts", memberObj, 'application/json'); // 응답을 받아라! await : 실제로 대기해야 할 부분 // JAVA 서버로 던져야 함!
            setResDate(res.data);

        } catch (e) {
            console.log(e); // 에러가 발생하면 에러를 보여주는 부분
        }
    }


    return (
        <div>
            <h1>회원 정보 설정</h1>
            <Link to="/">홈으로 이동</Link><br/>
            <input type="text" placeholder='아이디 입력' value={id} onChange={onChangeId} /><br/>
            <input type="password" placeholder='비밀번호 입력' value={pwd} onChange={onChangePwd} /><br/>
            <input type="text" placeholder='이름 입력' value={name} onChange={onChangeName} /><br/>
            <input type="text" placeholder='주소 입력' value={addr} onChange={onChangeAddr} /><br/>
            <input type="email" placeholder='메일 입력' value={mail} onChange={onChangeMail} /><br/>
            <input type="text" placeholder='전화번호 입력' value={phone} onChange={onChangePhone} /><br/>
            {/* submit이 참이면 버튼을 눌러준다! submit을 처음에 false로 설정해줬지만 입력창이 다 활성화되면 true가 됨 */}
            {submit && <button onClick={onSubmit}>전송</button>} 
            {resData && <textarea rows={7} value={JSON.stringify(resData, null, 2)} readOnly={true} />}

        </div>
    );
}
export default Setting;