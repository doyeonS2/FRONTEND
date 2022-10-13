
// const welcomeProp = (매개변수가 들어오는 자리) => {

// }

//-----------------------------------------------
// function welcomeProp(매개변수가 들어오는 자리) {

// }

//------------------------------------------------

// WelcomeProp 부분은 대문자로 시작해야 함
function WelcomeProp(props) {
    return (
        // <div>
        // <h1>안녕하세요. 저는 {props.name}입니다.</h1>
        // <h1>저는 요즘 {props.jobs}을 하고 있습니다.</h1>
        // </div>
        <div>
            <h3>안녕하세요. 저는 {props.name}이고, 직업은 {props.job}입니다.  </h3>
            </div>
    );

}
export default WelcomeProp;