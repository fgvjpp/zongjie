import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom'
import store from './redux/store';
import { Provider } from 'react-redux'; // Provider组件可以监测store状态更新 更新后会重新渲染当前组件下的所有组件  这种方式更新后会重新渲染只支持react-redux


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

// redux插件支持的更新后会重新渲染的方法
// store.subscribe(() => {
//   root.render(
//     <Router>
//       <App />
//     </Router>
//   )
// })

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
