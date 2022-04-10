import React from "react";

const Cartitem = (props) =>{
    const { title, price, qty, img} = props.product;
    const {product, onProductIncrease, onProductDecrease, onDelete} = props;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img src={img} style={styles.image} alt={'product'}/>
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
                        onClick={()=> onProductIncrease(product)}    
                    />

                    <img
                        alt="decrease" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/992/992683.png"
                        onClick={() => onProductDecrease(product)}

                    />
                    
                    <img 
                        alt="delete" 
                        className="action-icons" 
                        src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png" 
                        onClick={()=>{onDelete(product.id)}}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
      height: 110,
      width: 110,
      borderRadius: 4,
      background: '#ccc'
    }
}

export default Cartitem;