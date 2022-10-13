import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 닫힘 태그가 없으면 에러나기 때문에 <SampleJSX/>로 쓴다. 열림 태그는 없어도 닫힘 태그는 있어야 함! */}
  <App/> 
  </React.StrictMode>
);

