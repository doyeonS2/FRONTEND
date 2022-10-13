import WelcomeProp from './1013_JSX/WelcomeProp';
import './App.css';

// function App() {
//   const name = "도라에몽";
//   const validMember = <h1>환영합니다. {name}님^^</h1>
//   const invalidMember = <h1>환영합니다. 방문자님^^</h1>
//   let isMember = true;

  // return (
    // // 반드시 감싸주는 요소가 필요함. <></> 빈 태그라도 넣어야 함
    //   <> 
    //   <p>제 짝꿍을 소개합니다.</p>
    //   <p>제 짝꿍은 개발하는 뚝딱이입니다!!</p>
    //   </>

    // if(isMember) return (<>{validMember}</>);
    // else return (<>{invalidMember}</>);
     

  // );
// }

function App() {
  // const element = <WelcomeProp name="곰돌쓰" jobs="리액트 개발"/>
  return (
    // <div>{element}</div>
    <div>
      <WelcomeProp name="김재환" job="가수" color="royalBlue" font="1.5em">❤_❤</WelcomeProp>
      <WelcomeProp name="옹성우" job="가수 겸 배우" color="orange" font="1.8em">❤0❤</WelcomeProp>
      <WelcomeProp name="배진영" job="아이돌" color="green" font="2.1em">😊</WelcomeProp>
      <WelcomeProp />
      
    </div>
  );
}

export default App;
