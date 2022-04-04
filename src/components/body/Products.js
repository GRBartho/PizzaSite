import React from "react";
import { ReactDOM } from "react";
import BodyCategories from "./Categories";
import Total from "../footer/Total";

const BodyProducts = ({ categoria, setTotalPrice, setCount, count }) => {
  return (
    <div class="SubProducts">
      {categoria?.produtos.map((produto, index) => {
        const decreasePrice = () => {
          setTotalPrice((prev_state) => prev_state - produto.price);
        };

        const increasePrice = () => {
          setTotalPrice((prev_state) => prev_state + produto.price);
        };

        const increaseQty = () => {
          setCount((prev) => ({ ...prev, [produto.id]: prev[produto.id] + 1 }));
        };
        const decreaseQty = () => {
          setCount((prev) => ({ ...prev, [produto.id]: prev[produto.id] - 1 }));
        };

        const decrease = () => {
          decreasePrice();
          decreaseQty(produto.id);
        };

        const increase = () => {
          increasePrice();
          increaseQty(produto.id);
        };

        if (count[produto.id] <= 0) {
          count[produto.id] = 0;
        }

        return (
          <div class="subProduto">
            <p class="subNome">{produto.nome}</p>
            <div class="adder">
              <button
                class="adtake"
                onClick={decrease}
                disabled={count[produto.id] === 0}
              >
                -
              </button>
              <div>{count[produto.id]}</div>
              <button class="adtake" onClick={increase}>
                +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BodyProducts;
