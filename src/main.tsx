import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import dayjs from 'dayjs';
import { ConfigProvider, Spin } from 'antd';
import 'dayjs/locale/zh-cn';
import zhCN from 'antd/locale/zh_CN';
import {
  createBrowserRouter,
  defer,
  Outlet,
  RouterProvider,
} from 'react-router-dom';
import App from './app';
dayjs.locale('zh-cn');
import './index.css';
import Login from 'pages/login/login';
import { mockFetch } from 'utils/common';
import Home from 'pages/home/home';
import TablePage from 'pages/feature/table/table';
import TableDetails from 'pages/feature/table/table-details';

export const MyFallback = () => {
  return (
    <div>
      <Spin spinning={true}></Spin>
    </div>
  );
};

const routerC = [
  {
    path: '/',
    element: <App />,
    hydrateFallbackElement: <MyFallback />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'feature',
        element: (
          <div>
            <Suspense fallback={<MyFallback />}>
              <Outlet />
            </Suspense>
          </div>
        ),
        children: [
          {
            path: 'table',
            element: <TablePage />,
          },
          {
            path: 'table/:id',
            element: <TableDetails />,
            loader: ({ params }) => {
              console.log(params);
              return defer({
                detail: mockFetch({ name: 'aa', age: 18, id: params.id }, 90),
              });
            },
          },
          {
            path: 'form',
            element: <div>feature/form</div>,
          },
        ],
      },
    ],
  },
  {
    path: 'login',
    element: <Login />,
  },
];
(async () => {
  const root = document.getElementById('root');
  const loadingText = document.createTextNode('loading');
  root?.appendChild(loadingText);
  const config = await mockFetch(routerC, 300);
  const router = createBrowserRouter(config);

  createRoot(root as HTMLElement).render(
    <ConfigProvider locale={zhCN}>
      <RouterProvider router={router}></RouterProvider>
    </ConfigProvider>,
  );
})();
