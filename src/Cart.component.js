import React from "react";
import Cartitem from "./Cartitem.component";

class Cart extends React.Component{
    constructor(){
        super();
        this.state ={
            products:[
                {
                    title: 'mobile',
                    price: 8000,
                    qty: 1,
                    img:'',
                    id:1
                },
                {
                    title: 'Laptop',
                    price: 48000,
                    qty: 1,
                    img:'',
                    id:2
                },
                {
                    title: 'watch',
                    price: 2000,
                    qty: 4,
                    img:'',
                    id:3
                }
            ]
        }
    }

    handleIncreaseQty = (product)=>{
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty +=1;
        this.setState({
            products
        })
    }

    handleDecreaseQty = (product)=>{
        if(product.qty>0){
            const {products} = this.state;
            const index = products.indexOf(product);
            products[index].qty -=1;
            this.setState({
                products
            })
        }
    }

    handelDelete = (productId)=>{
        const {products} = this.state;
        const updatedProducts = products.filter((product)=>{ return product.id !== productId});
        this.setState({
            products: updatedProducts
        });
    }

    render(){
        const products = this.state.products;
        return(
            <div className="cart">
                {products.map((product)=>{
                    return(
                        <Cartitem 
                            product = {product} 
                            key={product.id}
                            onProductIncrease = {this.handleIncreaseQty}
                            onProductDecrease = {this.handleDecreaseQty}
                            onDelete = {this.handelDelete}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Cart;