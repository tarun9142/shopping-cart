import React from "react";

class Cartitem extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'phone',
            price: '8000',
            qty: 1,
            img: ''
        }
    }

    increaseQty = () => {
        this.setState((prevState)=>{
            return {
                qty: prevState.qty + 1
            }
        })
    }

    decreaseQty = () => {
        this.setState((prevState)=>{
            if(prevState.qty>0){
                return{
                    qty: prevState.qty - 1
                }
            }
        })
    }
render(){
    const { title, price, qty } = this.state
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} alt={'product'} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>Rs {price}</div>
                <div style={{ color: '#777' }}>quantitiy: {qty}</div>
                <div className="cart-item-actions">
                    {/*Buttons*/}
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://cdn-icons-png.flaticon.com/512/1828/1828926.png"
                        onClick={this.increaseQty}    
                    />

                    <img
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={this.decreaseQty}

                    />
                    
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" 
                    />
                </div>
            </div>
        </div>
    );
}
}

const styles = {
    image: {
        height: 40,
        width: 40
    }
}

export default Cartitem;