import './App.css';

function App() {
  const name = "도라에몽";
  const validMember = <h1>환영합니다. {name}님^^</h1>
  const invalidMember = <h1>환영합니다. 방문자님^^</h1>
  let isMember = true;

  // return (
    // // 반드시 감싸주는 요소가 필요함. <></> 빈 태그라도 넣어야 함
    //   <> 
    //   <p>제 짝꿍을 소개합니다.</p>
    //   <p>제 짝꿍은 개발하는 뚝딱이입니다!!</p>
    //   </>

    if(isMember) return (<>{validMember}</>);
    else return (<>{invalidMember}</>);
     

  // );
}

export default App;
