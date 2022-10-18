import styled, {css} from 'styled-components';

const Box = styled.div`
    background: ${props => props.color || 'blue'};
    padding: 1rem;
    display: flex;
    width: 1024px;
    margin: 0 auto;
    @media (max-width: 1024px) {
        width: 768px;
    }
    @media (max-width: 768px) {
        width: 100px;
        width: 98%;
    }
`;

const Button = styled.button`
background: white;
color: black;
border-radius: 4px;
padding: .5rem;
align-items: center;
justify-content: center;
box-sizing: border-box;
font-size: 1rem;
font-weight: 600;


/* 버튼위에 마우스가 올라갈 때 변화하는 동작 */
&:hover {
  background : rgba(255, 255, 255, 0.5);
}

${(props => props.inverted && css`
    background: none;
    border: 2px solid white;
    color: white;
    &:hover {
        background: white;
        color: black;
}
`)}


& + button {
    margin-left : 1rem
}
`;

const StyledComponent = () => {

return(
    <Box color="red">
    <Button>안녕하세요</Button>
    <Button inverted={true}>테두리만</Button>
</Box>
)
}

export default StyledComponent;