import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  let increas = () => {
    count < 20 && setCount(count + 1);
  };

  let decrease = () => {
    count > 0 && setCount(count - 1);
  };
  return (
    <>
      <div>
        <button onClick={increas}>+</button>
        <span>{count}</span>
        <button onClick={decrease}>-</button>
      </div>
    </>
  );
}

export default App;
