'use client';

import Button from '@/component/ButtonSecond'
import { useState } from 'react';

export default function DemoPage() {
  const [message, setMessage] = useState('');

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h2>Reusable Button Demo</h2>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
        <Button type="primary" onClick={() => setMessage('Primary button clicked!')}>
          Primary
        </Button>

        <Button type="secondary" onClick={() => setMessage('Secondary button clicked!')}>
          Secondary
        </Button>

        <Button type="danger" onClick={() => setMessage('Danger button clicked!')}>
          Danger
        </Button>
      </div>

      {message && <p style={{ marginTop: '1rem', color: '#666' }}>{message}</p>}
    </div>
  );
}
