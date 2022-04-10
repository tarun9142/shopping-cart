import { render } from "@testing-library/react";
import React from "react";
import Cartitem from "./Cartitem.component";

function Cart(){
        return(
            <div>
                <Cartitem/>
                <Cartitem/>
                <Cartitem/>
            </div>
        )
}

export default Cart;