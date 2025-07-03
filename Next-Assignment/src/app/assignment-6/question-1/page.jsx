'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const Input = dynamic(() => import('@/component/Input'), {
  loading: () => <p>Loading Clock...</p>,
  ssr: false,
});
const Question6Page = () => {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Assignment 5 Question 6</h1>
      <Suspense fallback={<p>Loading component...</p>}>
        <Input/>
      </Suspense>
    </div>
  );
}
export default Question6Page
