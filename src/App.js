import "./App.css";
import React, { useState } from "react";
import HeaderTop from "./components/header/HeaderTop";
import HeaderBody from "./components/header/HeaderBody";
import BodyCategories from "./components/body/Categories";
import Total from "./components/footer/Total";

const App = () => {
  const [totalPrice, setTotalPrice] = useState(0);

  const [count, setCount] = useState([
    { prod_id: 1, cat_id: 1, qtd: 0 },
    { prod_id: 2, cat_id: 1, qtd: 0 },
    { prod_id: 3, cat_id: 1, qtd: 0 },
    { prod_id: 4, cat_id: 1, qtd: 0 },
    { prod_id: 1, cat_id: 2, qtd: 0 },
    { prod_id: 2, cat_id: 2, qtd: 0 },
    { prod_id: 3, cat_id: 2, qtd: 0 },
    { prod_id: 4, cat_id: 2, qtd: 0 },
    { prod_id: 1, cat_id: 3, qtd: 0 },
    { prod_id: 2, cat_id: 3, qtd: 0 },
    { prod_id: 3, cat_id: 3, qtd: 0 },
    { prod_id: 4, cat_id: 3, qtd: 0 },
    { prod_id: 1, cat_id: 4, qtd: 0 },
    { prod_id: 2, cat_id: 4, qtd: 0 },
    { prod_id: 3, cat_id: 4, qtd: 0 },
    { prod_id: 4, cat_id: 4, qtd: 0 },
  ]);

  return (
    <div className="pageDisplay">
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
