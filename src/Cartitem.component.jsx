import React from "react";

class Cartitem extends React.Component {
render(){
    const { title, price, qty} = this.props.product;
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
                        onClick={()=> this.props.onProductIncrease(this.props.product)}    
                    />

                    <img
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={() => this.props.onProductDecrease(this.props.product)}

                    />
                    
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" 
                        onClick={()=>{this.props.onDelete(this.props.product.id)}}
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