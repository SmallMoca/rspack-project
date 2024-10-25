import { Descriptions } from 'antd';
import { MyFallback } from 'main';
import React from 'react';
import { Await, defer, useLoaderData, useParams } from 'react-router-dom';
import { mockFetch } from 'utils/common';

export const getDetailLoader = ({ params }) => {
  console.log(params);
  return defer({
    detail: mockFetch({ name: 'aa', age: 18, id: params.id }, 90),
  });
};

export default function TableDetails() {
  const loaderData = useLoaderData() as any;
  let params = useParams();
  console.log(params);

  const { detail = {} } = loaderData || {};

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        background: '#fff',
        position: 'absolute',
      }}
    >
      <h3>detail</h3>
      <React.Suspense fallback={<MyFallback />}>
        <Await
          resolve={detail}
          errorElement={<div>Could not load reviews 😬</div>}
          children={(detail) => {
            console.log(detail);
            return (
              <Descriptions title={detail.name}>
                <Descriptions.Item label="age">{detail.name}</Descriptions.Item>
                <Descriptions.Item label="Telephone">
                  1810000000
                </Descriptions.Item>
                <Descriptions.Item label="Live">
                  Hangzhou, Zhejiang
                </Descriptions.Item>
                <Descriptions.Item label="Remark">empty</Descriptions.Item>
                <Descriptions.Item label="Address">
                  No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
                </Descriptions.Item>
              </Descriptions>
            );
          }}
        />
      </React.Suspense>
    </div>
  );
}
