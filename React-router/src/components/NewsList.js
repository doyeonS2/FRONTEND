import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import NewsItem from "./NewsItems";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3em;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width : 100%;
        padding-left: 1em;
        padding-right: 1em;
    } 
`;

const NewsList = (props) => {
    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);
    // 비동기를 쓰는 이유 => 서버에 요청하고 나면 서버의 응답이 올 때까지 화면이 멈추는 것을 막기위해 사용
    useEffect(() => { // 화면이 렌더링될 때 해야할 일을 여기서 구현함
        // async와 await는 한 쌍
        const fetchData = async () => { // useEffect Hook에서 async/await를 사용하기 위해서는 함수가 필요(=> useEffect에서는 async/await를 못붙이기때문에)
            // 따라서 함수로 그냥 감싸기
            setLoading(true); // 화면이 로딩 중임을 표시함
            try { // 서버에 대한 요청을 시도함
                // 참이면 공백, 거짓이면 백틱
                // 백틱도 문자열이 들어가는 것
                // all이면 유지, all이 아니면 category선택됨
                // nav가 눌러지면 nav바에 대한 값을 props.categories로 불러옴
                const query = props.category === "all" ? "" : `category=${props.category}`;
                const response = await axios.get(
                 `https://newsapi.org/v2/top-headlines?country=kr&${query}apiKey=ffbbc82f694941a7b0e2d4f4515abcc7`
                );
                setArticles(response.data.articles); // 동기처럼 보이지만 비동기로 결과를 받음,  화면이 랜더링 됨
            } catch (e) { // 서버 요청이 실패함
                console.log(e);
            }
            setLoading(false); 
        }
        fetchData();
    }, [props.category]); // []의존성 배열
    // []배열을 비워두면 값이 변경된 상태를 체크하지 않기때문에 화면이 나타날 때만 해당 함수가 실행됨

    if(loading) {return <NewsListBlock>로딩중......</NewsListBlock>}
    if(!articles) return null;

    return (
        <NewsListBlock>
            {/* 서버로부터 데이터가 들어오면 map 함수를 순회하는 매개변수를 전달함*/}
            {articles.map(article => (<NewsItem key ={article.url} article={article}/>))} 
        </NewsListBlock>
    )
}

export default NewsList;