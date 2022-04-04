import "./App.css";
import React, { useState } from "react";
import { ReactDOM } from "react";
import HeaderTop from "./components/header/HeaderTop";
import HeaderBody from "./components/header/HeaderBody";
import BodyCategories from "./components/body/Categories";
import Total from "./components/footer/Total";

const App = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  if (totalPrice < 0) {
    setTotalPrice(0);
  }

  const [count, setCount] = useState({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
  });

  return (
    <div class="pageDisplay">
      <HeaderTop />
      <HeaderBody />
      <BodyCategories
        setTotalPrice={setTotalPrice}
        setCount={setCount}
        count={count}
      />
      <Total totalPrice={totalPrice} />
    </div>
  );
};

export default App;