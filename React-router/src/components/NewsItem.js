import styled from 'styled-components';

const NewsItemBloc = styled.div`
    display: flex;
    margin-top: 3em;
    .thumbnail {
        margin-right: 1em;
        img {
            display: block;
            width: 160px;
            height: 100px;
            object-fit: cover; // 가로세로 비율을 유지하면서 가득 채움
        }
    }
    .contents {
        h2 {
            margin: 0;
            a {
                color: black;
            }
    const [loading, setLoading] = useState(false);
        }
        p {
            margin: 0;
            line-height: 1.5;
            margin-top: .5rem;
            white-space: normal;
        }
    }
`;

// NewsList로부터 한개의 기사 단위로 컴포넌트를 호출받음
const NewsItem = ({article}) => { // props 자체를 넣을 때는 ()만 넣어도되지만, 데이터를 쪼개서 넣을때는 ({})
    const { title, description, url, urlToImage, source, author } = article; // 구조분해!
    return (
        <NewsItemBloc>
            {urlToImage && (
                <div className='thumbnail'>
                    {/* noopener : 하이퍼링크를 따라 연결되는 어떠한 브라우징 컨텍스트(browsing context)도 오프너(opener)여서는 안 됨을 나타냄 */}
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className='contents'>
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">
						{title}
                    </a>
                </h2>
                <p>{description}</p>
                <p>{source.name}</p>
                <p>{author}</p>
            </div>
        </NewsItemBloc>
    );
};
export default NewsItem;