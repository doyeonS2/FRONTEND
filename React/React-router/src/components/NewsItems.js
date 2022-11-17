import styled from "styled-components";

const NewsItemBlock = styled.div`
display: flex;
margin-top:  3em;

.thumbnail {
    margin-right: 1em;
    img {
        display : block;
        width : 160px;
        height: 100px;
        object-fit: cover; // 가로세로 비율을 유지하면서 가득 채움
    }
}
 .contents {
    h2{
        margin: 0;
        a{
            color:black;
        }
    }

    p{
        margin: 0;
        line-height: 1.5;
        margin-top: .5rem;
        white-space: normal;
    }

    & + & {
        margin-top:  3em;
    }
 }
`;
// NewsList로부터 한계의 기사단위로 컴포넌트를 호출
// 중괄호를 넣으면 구조분해된 데이터
const NewsItems = ({article}) => {
    const { title, description, url, urlToImage, source, author} = article;
    return (
        <NewsItemBlock>
            {urlToImage && (
                <div className='thumbnail'>
                    {/* url 링크이미지 출력부분 */}
                    <a href= {url} target="_blank" rel="noopener noreferrer"> 
                        <img src = {urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}

            <div className="contents">
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {title}
                    </a>
                </h2>
                <p>{description}</p>
                <p>{source.name}</p>
                <p>{author}</p>
            </div>
        </NewsItemBlock>
    )
}
export default NewsItems;