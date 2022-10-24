import './App.css';
import Login from './Login';
import Signup from './signup/Signup';
import GoHome from './home/Home';
import MemberReg from './pages/MemberReg';
import MemberInfo from './pages/MemberInfo';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { MyContext } from './context/UserInfo';
import { useState } from 'react';

function App() {
  const [memName, setMemName] = useState("KH정보교육원");
  return (
    <MyContext.Provider value={{memName, setMemName}}>
      <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Home" element={<GoHome />} />
            <Route path="/MemberInfo" element={<MemberInfo />} />
            <Route path="/MemberReg" element={<MemberReg />} />
        </Routes>
      </Router>
    </MyContext.Provider>
  );
}

export default App;
