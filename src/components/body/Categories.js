import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import BodyProducts from "./Products";

const BodyCategories = ({ setTotalPrice, setCount, count }) => {
  const [opened, setOpened] = useState(null);

  const categorias = [
    {
      id: 1,
      nome: "Pizza",
      produtos: [
        { id: 1, nome: "Broto", price: 30 },
        { id: 2, nome: "Media", price: 40 },
        { id: 3, nome: "Grande", price: 50 },
      ],
    },
    {
      id: 2,
      nome: "Drinks",
      produtos: [
        { id: 4, nome: "Coca-Cola", price: 4 },
        { id: 5, nome: "Sprite", price: 5 },
        { id: 6, nome: "Fanta Uva", price: 5 },
        { id: 7, nome: "Agua", price: 1 },
      ],
    },
    {
      id: 3,
      nome: "Massas",
      produtos: [
        { id: 8, nome: "Carbonara", price: 15 },
        { id: 9, nome: "Ao Molho", price: 20 },
        { id: 10, nome: "Molho Gorgonzola", price: 25 },
        { id: 11, nome: "Nhoque", price: 20 },
      ],
    },
    {
      id: 4,
      nome: "Hamburgueres",
      produtos: [
        { id: 12, nome: "Carne", price: 20 },
        { id: 13, nome: "Frango", price: 22 },
        { id: 14, nome: "Queijo", price: 15 },
        { id: 15, nome: "Vegano", price: 30 },
      ],
    },
  ];

  return (
    <div class="MainProducts">
      {categorias.map((categoria, index) => {
        return (
          <div class="category">
            <p class="foodTitle">
              {categoria.nome}
              <button
                class="openList"
                onClick={() => {
                  setOpened(categoria.id === opened ? null : categoria.id);
                }}
                margin="5px"
              >
                V
              </button>
            </p>
            {opened === categoria.id && (
              <BodyProducts
                categoria={categoria}
                setTotalPrice={setTotalPrice}
                setCount={setCount}
                count={count}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default BodyCategories;
