import React, { useState, useEffect } from "react";
import ShoppingCart from "./shoppingCart"; // Import ShoppingCart from the same directory

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 10) {
      alert("Max reached!");
    }
  }, [count]);

  const incrCount = () => {
    setCount(count + 1);
  };
        // npm start in teriminal to run the code
  return (
    <div>
      <center>
        <h1>Counter: {count}</h1>
        <button onClick={incrCount}>Increase</button>
        <button onClick={() => setCount(count - 1)}>Decrease</button>
        <button onClick={() => setCount(0)}>Reset</button>
        {count === 5 && <p>Clicked 5 Times</p>}
        {count === 10 && <p>Clicked 10 Times It's The Max</p>}
        {count === 5 && <ShoppingCart />} {/* Render ShoppingCart when count is 5 */}
      </center>
    </div>
  );
}

export default App;