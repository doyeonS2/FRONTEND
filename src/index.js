import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ClassComp from './1013_JSX/ClassComp';
import './index.css';
import Counter from './1013_JSX/Counter';
import Say from './1013_JSX/Say';
import Clock from './1013_JSX/Timer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 닫힘 태그가 없으면 에러나기 때문에 <SampleJSX/>로 쓴다. 열림 태그는 없어도 닫힘 태그는 있어야 함! */}
  <Clock /> 
  </React.StrictMode>
);

