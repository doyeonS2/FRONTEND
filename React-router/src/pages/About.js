import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h1>소개</h1>
            <p>리액트 라우터를 사용해볼게요~</p>
            <Link to="/">홈으로 이동</Link><br />
            <Link to="/setting">설정</Link>
        </div>
    );
}
export default About;