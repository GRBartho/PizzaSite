import React from "react";

const BodyProducts = ({ categoria, setTotalPrice, setCount, count }) => {
  return (
    <div class="SubProducts">
      {categoria?.produtos.map((produto) => {
        var result = Object.values(count).map((prod) => ({
          prod_id: prod.prod_id,
          cat_id: categoria.id,
          qtd: prod.qtd,
        }));

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
          if (prod.prod_id === produto.id && prod.cat_id === categoria.id) {
            /*Problema*/ setCount((prev_count) => {
              const obj = {
                ...prev_count.filter(
                  (o) => o.prod_id === produto.id && o.cat_id === categoria.id
                ),
              };
              const arraySemObj = prev_count.filter(
                (o) =>
                  o.prod_id !== obj[0].prod_id || o.cat_id !== obj[0].cat_id
              );

              obj[0].qtd++;

              return [...arraySemObj, obj[0]];
            });
          }
        };

        const decreaseQty = () => {
          if (prod.prod_id === produto.id && prod.cat_id === categoria.id) {
            setCount((prev_count) => {
              const obj = {
                ...prev_count.filter(
                  (o) => o.prod_id === produto.id && o.cat_id === categoria.id
                ),
              };
              const arraySemObj = prev_count.filter(
                (o) =>
                  o.prod_id !== obj[0].prod_id || o.cat_id !== obj[0].cat_id
              );

              obj[0].qtd--;

              return [...arraySemObj, obj[0]];
            });
          }
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
                disabled={prod.qtd === 0}
              >
                -
              </button>
              <div>{prod.qtd}</div>
              <button
                class="adtake"
                onClick={increase}
                disabled={prod.qtd >= 50}
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
