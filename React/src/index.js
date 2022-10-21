import React from 'react';
import ReactDOM from 'react-dom/client';
//-----------------------------------------
import App from './App';
import ClassComp from './1013_JSX/ClassComp';
import './index.css';
import Counter from './1013_JSX/Counter';
import Say from './1013_JSX/Say';
import Clock from './1013_JSX/Timer';
import EventInput from './1017_ex/InputEx';
import Event from './1017_ex/Event';
import Event2 from './1017_ex/Event2';
import Event3 from './1017_ex/Event3';
import ArrayList from './1017_ex/ArrayList';
import ArrayMap from './1017_ex/ArrayMap';
import ArrayMap2 from './1017_ex/ArrayMap2';
import NameCard from './1017_ex/NameCard';
import Info from './1018_hook/Effect.js';
import Reducer from './1018_hook/Reducer';
import Memo from './1018_hook/Memo';
import Callback from './1018_hook/Callback';
import Ref from './1018_hook/Ref';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 닫힘 태그가 없으면 에러나기 때문에 <SampleJSX/>로 쓴다. 열림 태그는 없어도 닫힘 태그는 있어야 함! */}
    <Ref />
  </React.StrictMode>
);


