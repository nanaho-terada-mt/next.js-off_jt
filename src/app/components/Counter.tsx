'use client';

import {useState} from "react";
export default function Counter() {
  const [count, setCounter] = useState(0);
  return (
    <div>
      <p>勝利数：{count}</p>
      <button onClick={() => setCounter(count+1)}>➕１</button>
      <button onClick={() => setCounter(count-1)}>➖１</button>
    </div>
  );
}