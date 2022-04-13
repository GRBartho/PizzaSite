import React from "react";

const HeaderTop = () => {
  return (
    <div className="headerTop">
      <div className="imgPlacement">
        <a
          href="https://www.thepizzacompany.vn/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt=""
            className="companyLogo"
            src="https://seeklogo.com/images/T/the-pizza-company-logo-D44DBE70F1-seeklogo.com.png"
            height="40px"
            width="60px"
          />
        </a>
      </div>
      <div className="iconPlacement">
        <div className="Icons">Icon1</div>
        <div className="Icons">Icon2</div>
        <div className="Icons">Icon3</div>
      </div>
    </div>
  );
};

export default HeaderTop;
