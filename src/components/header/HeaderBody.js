import React from "react";

const change = () => {
  if (document.getElementById("mybtn").textContent === "Aberto") {
    document.getElementById("mybtn").textContent = "Fechado";
  } else {
    document.getElementById("mybtn").textContent = "Aberto";
  }
};

const headerBody = (toggle) => {
  return (
    <div className="headerBody">
      <img
        alt=""
        className="HBImage"
        src="https://thumbs.dreamstime.com/b/italian-pizza-fresh-salad-red-wine-wide-composition-party-dinner-flat-lay-various-kinds-glasses-over-rustic-wooden-table-174281796.jpg"
      />
      <div className="imgFooter">
        <div className="IFTime">
          <p>Pizza!</p>
        </div>
        <div className="status">
          <button className="opnbut" onClick={change} id="mybtn">
            Aberto
          </button>
        </div>
      </div>
    </div>
  );
};

export default headerBody;
