import React from 'react';
import S from './app.module.less';
import NavMenu from 'components/menu/menu';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className={S.app}>
      <div className={S.menu}>
        <NavMenu />
      </div>
      <div className={S.content}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
