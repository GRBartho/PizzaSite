import React from "react";
import { ReactDOM } from "react";

const change = () => {
  if (document.getElementById("mybtn").textContent === "Aberto") {
    document.getElementById("mybtn").textContent = "Fechado";
  } else {
    document.getElementById("mybtn").textContent = "Aberto";
  }
};

const headerBody = (toggle) => {
  return (
    <div class="headerBody">
      <img
        class="HBImage"
        src="https://thumbs.dreamstime.com/b/italian-pizza-fresh-salad-red-wine-wide-composition-party-dinner-flat-lay-various-kinds-glasses-over-rustic-wooden-table-174281796.jpg"
      />
      <div class="imgFooter">
        <div class="IFTime">
          <p>Pizza!</p>
        </div>
        <div class="status">
          <button class="opnbut" onClick={change} id="mybtn">
            Aberto
          </button>
        </div>
      </div>
    </div>
  );
};

export default headerBody;
