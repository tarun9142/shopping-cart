import React from "react";
import Cart from "./Cart.component";
import Navbar from "./Navbar.component";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          title: "mobile",
          price: 8000,
          qty: 1,
          img: "https://images.unsplash.com/photo-1567581935884-3349723552ca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          id: 1,
        },
        {
          title: "Laptop",
          price: 48000,
          qty: 1,
          img: "https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=951&q=80",
          id: 2,
        },
        {
          title: "watch",
          price: 2000,
          qty: 4,
          img: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
          id: 3,
        },
      ],
    };
  }

  handleIncreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products,
    });
  };

  handleDecreaseQty = (product) => {
    if (product.qty > 0) {
      const { products } = this.state;
      const index = products.indexOf(product);
      products[index].qty -= 1;
      this.setState({
        products,
      });
    }
  };

  handelDelete = (productId) => {
    const { products } = this.state;
    const updatedProducts = products.filter((product) => {
      return product.id !== productId;
    });
    this.setState({
      products: updatedProducts,
    });
  };

  cartTotal = (products) =>{
    let count = 0;
    products.forEach(product => {
        count+=product.qty;     
    });

    return count;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar total={this.cartTotal(products)}/>
        <Cart
          products={products}
          handleIncreaseQty={this.handleIncreaseQty}
          handleDecreaseQty={this.handleDecreaseQty}
          handelDelete={this.handelDelete}
        />
      </div>
    );
  }
}

export default App;
