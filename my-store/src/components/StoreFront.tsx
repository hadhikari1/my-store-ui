import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product } from '../data/products';
import './StoreFront.css';
import { getProducts, addToCart } from '../api';
import { ShoppingCartRequest, ShoppingCartResponse } from '../data/ShoppingCart';

interface StoreFrontProps {
  cartItems: { product: Product, quantity: number, shoppingCartId?: number }[];
  setCartItems: any;
}

const StoreFront: React.FC<StoreFrontProps> = ({cartItems, setCartItems}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  const handleEditClick = (id: number) => {
    navigate(`/edit-product/${id}`);
  };

  useEffect(() => {
    getProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const saveToCart = async (item: ShoppingCartRequest) => {
    try {
      const addedItem = await addToCart(item)
      return addedItem.data as ShoppingCartResponse;
    } catch (error) {
      console.error('Error adding item to cart:', error);
    
    }
}

  const handleAddToCart = (product: Product) => {
    const itemIndex = cartItems.findIndex((item: any) => item.product.id === product.id);
    if (itemIndex >= 0) {
      const newItems = [...cartItems];
      newItems[itemIndex].quantity += 1;
      saveToCart({ productId: product.id, purchaseQuantity: newItems[itemIndex].quantity, shoppingCartId: newItems[itemIndex].shoppingCartId}).then((response) => {
      if (response) {
        setCartItems(newItems);
      }
    });
    } else {
      saveToCart({ productId: product.id, purchaseQuantity: 1 }).then((response) => {
        setCartItems([...cartItems, { product, quantity: 1, shoppingCartId: response?.id}]);
      });
    }
  };

  return (
    <div className="storefront">
      <h1>Store Front</h1>
      <table>
        <thead>
          <tr>
            <th>UPC</th>
            <th>Name</th>
            <th>Retail Price</th>
            <th>Wholesale Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Product) => (
            <tr key={product.upc}>
              <td>{product.upc}</td>
              <td>{product.name}</td>
              <td>${product.retailPrice.toFixed(2)}</td>
              <td>${product.wholesalePrice.toFixed(2)}</td>
              <td>{product.quantity}</td>
              <td>
                <button onClick={() => handleEditClick(product.id)}>Edit</button>
                <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StoreFront;