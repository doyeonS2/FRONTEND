import { Link } from "react-router-dom";

const Setting = () => {
    return (
        <div>
            <h1>설정페이지^^</h1>
            <p>리액트 라우터를 설정해볼게요!</p>
            <Link to="/">홈으로 이동</Link><br />
            <Link to="/about">소개</Link>
        </div>
    )
}
export default Setting;