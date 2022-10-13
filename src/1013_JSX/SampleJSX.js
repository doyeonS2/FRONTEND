// 1. 일반 함수로 만들기
// function SampleJSX() {

// }

//--------------------------------
// 2. 화살표 함수로 만들기
// const SampleJSX = () => {

// }

//---------------------------------
// function SampleJSX() {
//     const name = "도라에몽";
//     const validMember = <h1>환영합니다. {name}님^^</h1>
//     const invalidMember = <h1>환영합니다. 방문자님^^</h1>
//     let isMember = true;
//     if(isMember) return (<>{validMember}</>);
//     else return (<>{invalidMember}</>);
// }
// export default SampleJSX; 

//----------------------------------------
// function SampleJSX() {
//     const name = "도라에몽";
    
//     return (
//         // 참과 거짓을 나누는 경우, 삼항연산자 사용 가능. 단, if ~ else문은 사용할 수 없다!
//         <div>
//             {name === "도라에몽" ? (<h1>초코에몽 입니다.</h1>):(<h1>딸기에몽 입니다.</h1>)}
//         </div>
//     );
// }
// export default SampleJSX; 

//----------------------------------------
// function SampleJSX() {
//     const name = "곰돌이";
    
//     // 이름이 곰돌이 이면 곰돌이 출력~! (&&: 그리고 = "참"이면!!)
//     return <div>{name === "곰돌이" && <h1>곰돌이 출력 Go Go!</h1>}</div>
// }
// export default SampleJSX; 

//----------------------------------------
// function SampleJSX() {
//     const name = "곰돌이";
//     const textStyle = {
//         // 원래 CSS에서는 background-color, font-size 인데 backgroundColor, fontSize 등으로 사용 
//         // 이유? 자바스크립트 영역이기 때문에 하이픈(-) 불가능 => 카멜 표기법 사용
//         backgroundColor : "#222",
//         color : "royalBlue",
//         fontSize : "2em"
//     };
    
//     return <div style={textStyle}>{name === "곰돌이" && <h1>곰돌이 출력 Go Go!</h1>}</div>
// }
// export default SampleJSX; 

//----------------------------------------
import './Sample.css'

function SampleJSX() {
    const name = "곰돌이";

    return <div className="textStyle">{name === "곰돌이" && <h1>곰돌이 출력!</h1>}</div>
}
export default SampleJSX; 
