import React from "react";

const BodyProducts = ({ categoria, setTotalPrice, setCount, count }) => {
  return (
    <div class="SubProducts">
      {categoria?.produtos.map((produto) => {
        const prod = count.filter(
          (o) => o.prod_id === produto.id && o.cat_id === categoria.id
        )[0];

        const decreasePrice = () => {
          setTotalPrice((prev_state) => prev_state - produto.price);
        };

        const increasePrice = () => {
          setTotalPrice((prev_state) => prev_state + produto.price);
        };

        const increaseQty = () => {
          /*Problema*/ setCount((prev_count) => {
            const obj = {
              ...prev_count.filter(
                (o) => o.prod_id === produto.id && o.cat_id === categoria.id
              )[0],
            };

            obj.qtd++;

            const arraySemObj = prev_count.filter(
              (o) => o.prod_id !== obj.prod_id || o.cat_id !== obj.cat_id
            );

            return [...arraySemObj, obj];
          });
        };

        const decreaseQty = () => {
          /*Problema*/ setCount((prev_count) => {
            const obj = {
              ...prev_count.filter(
                (o) => o.prod_id === produto.id && o.cat_id === categoria.id
              )[0],
            };

            //mutando o objeto, o que faz o react strict mode renderizar de novo, fazendo com que use o setCount duas vezes
            obj.qtd--;

            const arraySemObj = prev_count.filter(
              (o) => o.prod_id !== obj.prod_id || o.cat_id !== obj.cat_id
            );

            return [...arraySemObj, obj];
          });
        };

        const decrease = () => {
          decreasePrice();
          decreaseQty();
        };

        const increase = () => {
          increasePrice();
          increaseQty();
        };

        return (
          <div class="subProduto">
            <p class="subNome">{produto.nome}</p>
            <div class="adder">
              <button
                class="adtake"
                onClick={decrease}
                disabled={prod.qtd <= 0}
              >
                -
              </button>
              <div>{prod.qtd}</div>
              <button
                class="adtake"
                onClick={increase}
                disabled={prod.qtd >= 20}
              >
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
