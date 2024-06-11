import React from 'react';
import { Product } from '../data/products';
import './Cart.css';
import {  checkout } from '../api';

interface CartProps {
  cartItems: { product: Product, quantity: number, shoppingCartId: number }[];
  setCartItems: any;
}

const Cart: React.FC<CartProps> = ({ cartItems, setCartItems }) => {


  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + (item.product.retailPrice * item.quantity);
    }, 0);
  };

  const handleCheckout = () => {
    const ids = cartItems.map(item => item.shoppingCartId);
    checkout(ids).then((response) => {
      setCartItems([]);
      alert('Checkout successful!');
    }).catch(error => {
      alert(`Error checking out: ${error}`);
    });
  }

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Retail Price</th>
            <th>Quantity</th>
            <th>Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(({ product, quantity }) => (
            <tr key={product.upc}>
              <td>{product.name}</td>
              <td>${product.retailPrice.toFixed(2)}</td>
              <td>{quantity}</td>
              <td>${(product.retailPrice * quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="total-price">
        Total Price: ${calculateTotalPrice().toFixed(2)}
      </div>
      <button className='checkout' onClick={handleCheckout}>Checkout</button>
    </div>
  );
};

export default Cart;
