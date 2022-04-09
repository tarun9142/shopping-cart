import React from "react";

class Cartitem extends React.Component{
    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image} alt={'product'}/>
                </div>
                <div className="right-block">
                    <div style={{fontSize:'25'}}>phone</div>
                    <div style={{color:'#777'}}>rs 8000</div>
                    <div style={{color:'#777'}}>quantitiy: 1</div>
                    <div className="cart-item-actions">
                        {/*Buttons*/}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height: 40,
        width: 40
    }
}

export default Cartitem;