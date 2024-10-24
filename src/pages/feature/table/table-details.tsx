import { MyFallback } from 'main';
import React from 'react';
import { Await, useLoaderData } from 'react-router-dom';

export default function TableDetails() {
  const { detail } = useLoaderData() as any;

  return (
    <div>
      <h3>detail</h3>
      <React.Suspense fallback={<MyFallback />}>
        <Await
          resolve={detail}
          errorElement={<div>Could not load reviews 😬</div>}
          children={(detail) => {
            console.log(detail);

            return <div>{detail.age}</div>;
          }}
        />
      </React.Suspense>
    </div>
  );
}
