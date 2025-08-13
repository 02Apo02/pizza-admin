
import React from 'react';

export default function App() {
  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Pizza Tapp Admin Panel</h1>
      <p>Buradan kartlar, görevler ve kullanıcılar yönetilebilir.</p>
      <div style={{ marginTop: '20px' }}>
        <button>📦 Kart Yönetimi</button>
        <button>📝 Görev Yönetimi</button>
        <button>👥 Kullanıcı Yönetimi</button>
      </div>
    </div>
  );
}
