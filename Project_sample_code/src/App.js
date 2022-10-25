import './App.css';
import Login from './Login';
import Signup from './signup/Signup';
import GoHome from './home/Home';
import MemberReg from './pages/MemberReg';
import MemberInfo from './pages/MemberInfo';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  const [isName, setIsName] = useState("0000");
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Home" element={<GoHome />} />
          <Route path="/MemberInfo" element={<MemberInfo />} />
          <Route path="/MemberReg" element={<MemberReg />} />
      </Routes>
    </Router>
  );
}

export default App;
