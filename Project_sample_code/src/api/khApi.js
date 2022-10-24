import axios from "axios";
const HEADER = 'application/json';
const KH_DOMAIN = "http://localhost:8111/jdbc_test/";

const KhApi = {
    // 로그인 기능
    userLogin: async function(id, pw) {
        const loginObj = {
            id: id,
            pwd: pw
        }
        return await axios.post(KH_DOMAIN + "LoginServlet", loginObj, HEADER);
    },
    // 회원 정보 조회
    memberInfo: async function() {
        const regCmd = {
            cmd : "MemberInfo"
        }
        return await axios.post(KH_DOMAIN + "member", regCmd, HEADER);
    },
    // 회원 가입
    memberReg: async function(id, pwd, name, mail) {
        const memberObj = {
            id: id,
            pwd: pwd,
            name: name,
            phone: mail
        };
        return await axios.post(KH_DOMAIN+"memberReg", memberObj, HEADER);
    },
    // 회원 가입 여부 확인
    memberRegCheck: async function(id) {
        const regCheck = {
            id: id,
        }
        return await axios.post(KH_DOMAIN + "memberCheck", regCheck, HEADER);
    }

}

export default KhApi;