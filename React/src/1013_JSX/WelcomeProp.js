
// const welcomeProp = (매개변수가 들어오는 자리) => {

// }

//-----------------------------------------------
// function welcomeProp(매개변수가 들어오는 자리) {

// }

//------------------------------------------------

// WelcomeProp 부분은 대문자로 시작해야 함
function WelcomeProp(props) {
    // 구조 분해( = 비구조화 할당) : props라는 하나의 덩어리를 각각의 변수로 나눠 담는 것!
    const {name, job, font, children, color} = props;

    return (
        // <div>
        // <h1>안녕하세요. 저는 {props.name}입니다.</h1>
        // <h1>저는 요즘 {props.jobs}을 하고 있습니다.</h1>
        // </div>

        // <div>
        //     <h3 style={{color:props.color, fontSize:props.font}}>안녕하세요. 
        //     저는 {props.name}이고, 직업은 {props.job}입니다.{props.children} </h3>
        // </div>

        <div>
            <h3 style={{color:color, fontSize:font}}>안녕하세요. 
            저는 {name}이고, 직업은 {job}입니다.{children} </h3>
        </div>
    );

}
WelcomeProp.defaultProps = {
    name: "익명",
    job: "무직",
    color: "black",
    font: "5em"
}



export default WelcomeProp;