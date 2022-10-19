import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>여기가 홈 입니다!</h1>
            <h2>가장 먼저 보이는 페이지랍니다^^</h2>
            <Link to="/About"><h2>소개</h2></Link>
            <Link to="/Setting"><h2>설정</h2></Link>
            <Link to="/News"><h2>뉴스</h2></Link>
            <Link to="/NewsList"><h2>뉴스 아이템</h2></Link>
        </div>
    );
}
export default Home;