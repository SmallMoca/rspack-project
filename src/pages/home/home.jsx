import React from 'react';
import { log } from 'utils/common';
import S from './home.module.less';

export default function Home() {
  React.useEffect(() => {
    log('Home init');
  }, []);
  return <div className={S.home}>Home pages</div>;
}
