import React, { useState } from 'react';

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0); // useState 선언든 딱 한번만 일어난다
  return (
    <div className='counter'>
      <p className='number'>
        {count} <span className='total'>/{total}</span>
      </p>
      <button
        className='button'
        onClick={() => {
          setCount((prev) => prev + 1);
          // https://react.dev/learn/queueing-a-series-of-state-updates
          onClick();
        }}
      >
        Add +
      </button>
    </div>
  );
}
