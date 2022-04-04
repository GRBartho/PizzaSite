import React, {useState} from "react";
import { ReactDOM } from "react";

const Total = ({totalPrice}) => {

    return (
        <div class='total'>
            <p class='totalText'>TOTAL: R$ {totalPrice}</p>
        </div>
    )
    
}

export default Total;