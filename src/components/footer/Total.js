import React from "react";

const Total = ({ totalPrice }) => {
  return (
    <div className="total">
      <p className="totalText">TOTAL: R$ {totalPrice}</p>
    </div>
  );
};

export default Total;
