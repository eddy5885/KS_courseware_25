import React, { useRef } from "react";
import { create } from "zustand";


interface CountState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}
const useCount = create<CountState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));

function App() {
  return (
    <div>
      <h1>自定义hooks</h1>
      <App1 />
      <hr />
      <App2 />
    </div>
  );
}

function App1() {
  const { count, increment, decrement } = useCount<{
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
  }>((state) => state);

  return (
    <div>
      <h2>自定义hooks1</h2>
      <div>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}

function App2() {
  const { count, increment, decrement } = useCount((state) => state);

  return (
    <div>
      <h2>自定义hooks2</h2>
      <div>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
}
export default App;
