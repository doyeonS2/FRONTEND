
// const welcomeProp = (매개변수가 들어오는 자리) => {

// }

//-----------------------------------------------
// function welcomeProp(매개변수가 들어오는 자리) {

// }

//------------------------------------------------

function WelcomeProp(props) {
    return (
        <div>
        <h1>안녕하세요. 저는 {props.name}입니다.</h1>
        <h1>저는 요즘 {props.jobs}을 하고 있습니다.</h1>
        </div>
    );

}
export default WelcomeProp;