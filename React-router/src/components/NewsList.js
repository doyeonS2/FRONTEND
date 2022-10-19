import { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItem";
import axios from "axios";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1em;
        padding-right: 1em;
    }
`;

const sampleArticle = {
    title: "제목",
    description: "내용",
    url: "http://google.com",
    urlToImage: "http://via.placeholder.com"
}

const NewsList = () => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    // useEffect : 화면이 로딩중일때만 업데이트 하겠다는 의미
    useEffect(() => { // 화면이 렌더링 될 때 해야 할 일을 구현함
        const fetchData = async () => { // useEffect Hook에서 async/await를 사용하기 위해서는 함수가 필요
            setLoading(true); // 화면이 로딩중임을 표시함
            try { // 서버에 대한 요청을 시도함
                const response = await axios.get(
                    "https://newsapi.org/v2/top-headlines?country=kr&apiKey=ffbbc82f694941a7b0e2d4f4515abcc7",
                );
                setArticles(response.data.articles); // 동기처럼 보이지만 비동기로 결과를 받음, 렌더링이 일어남
                // console.log(response.data.articles);
            } catch (e) { // 서버 요청이 실패함
                console.log(e);
            }
            setLoading(false);    
        };
        fetchData();
    }, []); // [] : 의존성 배열을 의미, 배열을 비워두면 값이 변경된 상태를 체크하지 않기 때문에 화면이 나타날 때만 해당 함수가 실행됨

    if(loading) {
        return <NewsListBlock>로딩 중...........</NewsListBlock>
    }
    if(!articles) return null;

    return (
        <NewsListBlock>
            {/* 서버로부터 데이터가 들어오면 map 함수를 순회하는 매개변수를 전달함 */}
            {articles.map(article => (<NewsItem key={article.url} article={article}/>))}
        </NewsListBlock>
    );
}
export default NewsList;