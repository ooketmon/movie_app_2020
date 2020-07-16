import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
    <App />,
  document.getElementById('root')
  // <App />은 App 컴포넌트를 임포트 하여 사용한 것임 
  // App 컴포넌트는 아이디가 root인 엘리먼트에 그려질 것이다. 
  // 리액트는 컴포넌트와 함께 동작하고 리액트 앱은 모두 컴포넌트로 구성된다. 
);

