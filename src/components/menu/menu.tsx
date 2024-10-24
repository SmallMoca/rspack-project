import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'home',
    label: '首页',
    icon: <MailOutlined />,
  },
  {
    key: 'feature',
    label: '功能',
    icon: <AppstoreOutlined />,
    children: [
      { key: 'feature/1', label: '功能一' },
      { key: 'feature/2', label: '功能2' },
    ],
  },
];

const NavMenu: React.FC = () => {
  const [current, setCurrent] = useState('home');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <Menu
      theme={'dark'}
      onClick={onClick}
      style={{ width: 256, height: '100%' }}
      selectedKeys={[current]}
      mode="inline"
      items={items}
    />
  );
};

export default NavMenu;
