import styled, {css} from "styled-components";

// 리터럴 객체가 포함된 배열 만들기
const categories = [
    { name: 'all', text: '전체보기'},
    { name: 'business', text: '비즈니스'},
    { name: 'entertainment',text: '엔터테인먼트'},
    { name: 'health', text: '건강'},
    { name: 'science', text: '과학'},
    { name: 'sport', text: '스포츠'},
    { name: 'technology', text: '기술'}
];

// 스타일 넣어주기
// style을 div태그에 넣어주는 것
// div태그를 백틱`으로 묶어줌
const CategoriesBlock = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) { // 반응형 쿼리(screen : 화면에 출력되는 부분])
        width: 100%;
        overflow-x: auto; 
        // overflow-x : 왼쪽과 오른쪽의 내용이 넘칠 때(visible, hidden, scroll, auto)
        // auto : 내용이 잘림. 필요할 때만 스크롤바가 나타남
        // visible : 기본값, 내용이 잘리지 않음, 넘치는 내용은 밖으로 흘러 넘침
        // hidden : 내용이 잘림. 스크롤바가 나타나지 않음
        // scroll 내용이 잘림. 스크롤바가 나타남
    }
`;

const Category = styled.div`
    font-size: 1.125rem; // 125% 사이즈
    cursor: pointer; // 커서 스타일을 손가락 모양으로 변경
    white-space: pre;  // 공백이나 줄바꿈을 있는 그대로 표시
    text-decoration: none;
    color: inherit;   //  상속을 받는다는 것 => 부모의 컬러값을 따름
    padding-bottom: 0.25rem;
    margin-right: 1rem;

    &:hover {color:#495057;}
    & + & {margin-left: 1rem;}
    ${props => 
        props.active && css`
        font-weight: 600;
        border-bottom: 2px solid #22bbcf;
        color: #22b8cf;
        &:hover {
            color: #3bc9db;
        }
    `}
`;

const Categories = ({onSelect, category}) => {
    return (
        <CategoriesBlock>
            {/* categoriesBlock이 컨테이너박스 category가 컨테이너아이템이라고 생각하면 됨*/}
            {categories.map(c=>(
                <Category 
                    key={c.name}
                    active={category===c.name}  
                    onClick={()=>onSelect(c.name)}
                >{c.text}</Category>
            ))}
        </CategoriesBlock>
    );
};
export default Categories;