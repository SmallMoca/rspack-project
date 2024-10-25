import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { Link, Outlet } from 'react-router-dom';

interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, r) => (
      <Space size="middle">
        <Link to={`/feature/table/${r.key}`}>details</Link>
        <Link to={`/feature/table/${r.key}/edit`}>edit</Link>
      </Space>
    ),
  },
];

const data: DataType[] = Array(100)
  .fill(2)
  .map((_, key) => ({
    key: key,
    name: 'John Brown',
    age: Math.random(),
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  }));

const TablePage: React.FC = () => (
  <Table<DataType> columns={columns} dataSource={data} />
);

function Index() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <TablePage />
      <Outlet />
    </div>
  );
}

export default Index;
