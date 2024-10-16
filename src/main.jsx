import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import dayjs from 'dayjs';
import { ConfigProvider } from 'antd';
import 'dayjs/locale/zh-cn';
import './index.css';

import zhCN from 'antd/locale/zh_CN';
dayjs.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
);
