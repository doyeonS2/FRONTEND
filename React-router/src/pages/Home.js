import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>여기가 홈 입니다!</h1>
            <h2>가장 먼저 보이는 페이지랍니다^^</h2>
            <Link to="/about">소개</Link><br />
            <Link to="/setting">설정</Link>
        </div>
    )
}
export default Home;