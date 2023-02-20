import React from 'react';
import User from './User';

function Main() {
  return (
    <div>
      <h2>Suspense 미사용</h2>
      <User userId={1} />
    </div>
  );
}

export default Main;
