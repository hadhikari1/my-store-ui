import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StoreFront from './components/StoreFront';
import EditProduct from './components/EditProduct';
import Cart from './components/Cart';
import Header from './components/Header';
import { Product } from './data/products';
import { allShoppingCartItem } from './api';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<{ product: Product, quantity: number,  shoppingCartId: number}[]>([]);

  useEffect(() => {
    allShoppingCartItem().then((response) => {
      const formattedData = response.data.map((item: any) => {
        return {
          product: item.product,
          quantity: item.quantity,
          shoppingCartId: item.id
        };
      })
      setCartItems(formattedData);
    }).catch(error => {
      console.error('Error fetching cart items:', error);
    });
  }, []);

  const cartCounts = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <Router>
      <div className="App">
        <Header cartCount={cartCounts} />
        <Routes>
          <Route path="/" element={<StoreFront cartItems={cartItems} setCartItems={setCartItems}/>} />
          <Route path="/edit-product/:id" element={<EditProduct />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
