import React from "react";

const BodyProducts = ({ categoria, setTotalPrice, setCount, count }) => {
  return (
    <div class="SubProducts">
      {categoria?.produtos.map((produto, index) => {
        var result = Object.values(count).map((prod) => ({
          prod_id: prod.prod_id,
          cat_id: categoria.id,
          qtd: prod.qtd,
        }));

        const quantity = result.map((produto) => {
          return produto.qtd;
        });

        const decreasePrice = () => {
          setTotalPrice((prev_state) => prev_state - produto.price);
        };

        const increasePrice = () => {
          setTotalPrice((prev_state) => prev_state + produto.price);
        };

        const increaseQty = () => {
          if (
            result[index].prod_id === produto.id &&
            result[index].cat_id === categoria.id
          ) {
            setCount[index]((count[index].qtd = count[index].qtd + 1));
          } else {
            return;
          }
        };
        const decreaseQty = () => {
          if (
            result[index].prod_id === produto.id &&
            result[index].cat_id === categoria.id
          ) {
            setCount[index]((count[index].qtd = count[index].qtd - 1));
          } else {
            return;
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
                onClick={() => decrease(produto.id, categoria.id)}
                disabled={count[index].qtd === 0}
              >
                -
              </button>
              <div>{count[index].qtd}</div>
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
