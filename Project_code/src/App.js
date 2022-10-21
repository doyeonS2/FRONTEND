import './App.css';
import Login from './Login';
import SignupS1 from './signup/Signup';
import GoHome from './home/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/SignupS1" element={<SignupS1 />} />
            <Route path="/Home" element={<GoHome />} />
        </Routes>
      </Router>
  );
}

export default App;
