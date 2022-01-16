import { useEffect, useState, useCallback } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    handleClick();
  }, [handleClick]);

  return (
    <div className="App">
      <h1>counter: {count}</h1>
      <button onClick={handleClick}>INC</button>
    </div>
  );
}
