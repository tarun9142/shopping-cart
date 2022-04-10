import React from "react";
import Cartitem from "./Cartitem.component";

const Cart = (props) => {
    const products = props.products;
    return(
        <div className="cart">
            {products.map((product)=>{
                return(
                    <Cartitem 
                        product = {product} 
                        key={product.id}
                        onProductIncrease = {props.handleIncreaseQty}
                        onProductDecrease = {props.handleDecreaseQty}
                        onDelete = {props.handelDelete}
                    />
                )
            })}
        </div>
    )
}


export default Cart;