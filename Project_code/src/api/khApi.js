import axios from "axios";
const HEADER = {"Content-type" : "application/json; charset-UTF-8"};
const KH_DOMAIN = "http://localhost:8090/jdbc_test";

const KhApi = {
    userLogin: async function(id, pw) {
        let bodyContent = {
            "Query": {
                "UserInfo": {
                "id": id
                },
                "ApiInfo": {
                    "ApiName": "member",
                    "Params": {
                        "ID": id,
                        "Pass": pw
                    }
                }
            }
        }
        let reqOption = {url: KH_DOMAIN, method: "POST", Headers:HEADER, data: bodyContent}
        return await axios.request(reqOption);
    },
    memberInfo: async function() {
        let bodyContent = {

        }
        let reqOption = {url: KH_DOMAIN, method: "POST", Headers:HEADER, data: bodyContent}
        return await axios.request(reqOption);
    }


}

export default KhApi;