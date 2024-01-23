import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';


// lazysizes
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


// store
import { Provider } from 'react-redux';
import store from './redux/store';

// styled-components
import { ThemeProvider } from 'styled-components';  // 引入ThemeProvider组件   该组件theme参数接收是一个对象  该组件包裹下的所有样式组件中都通过props来接收该参数
import theme from './assets/Theme'; // 自定义主题对象样式数据

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </ThemeProvider>
);