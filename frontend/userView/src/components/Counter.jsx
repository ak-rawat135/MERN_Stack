import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const [increamentBy, setIncreamnetBy] = useState(1);
  function handleclick() {
    setCount(count + increamentBy);
  }
  function dec() {
    setCount(count - 1);
  }
  function increaseIncreament() {
    setIncreamnetBy(increamentBy + 1);
  }
  return (
    <>
      <h1>count value is : {count};</h1>
      <button onClick={handleclick}>increament</button>
      <button onClick={dec}>Decreament</button>

      <h1>we are increament by :{increamentBy}</h1>
      <button onClick={increaseIncreament}>Increase increament </button>
    </>
  );
}
