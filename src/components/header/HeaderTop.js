import React from "react";
import { ReactDOM } from "react";

const HeaderTop = () => {
  return (
    <div class="headerTop">
      <div class="imgPlacement">
        <a href="https://www.thepizzacompany.vn/" target="_blank">
          <img
            class="companyLogo"
            src="https://seeklogo.com/images/T/the-pizza-company-logo-D44DBE70F1-seeklogo.com.png"
            height="40px"
            width="60px"
          />
        </a>
      </div>
      <div class="iconPlacement">
        <div class="Icons">Icon1</div>
        <div class="Icons">Icon2</div>
        <div class="Icons">Icon3</div>
      </div>
    </div>
  );
};

export default HeaderTop;
