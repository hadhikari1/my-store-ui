import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Product } from '../data/products';
import './EditProduct.css';
import { getProductById, saveProduct } from '../api';

const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | undefined>({ id: 0, upc: '', name: '', retailPrice: 0, wholesalePrice: 0, quantity: 0 });

  useEffect(() => {
    if (id) {
      getProductById(Number(id))
        .then(response => setProduct(response.data))
        .catch(error => console.error('Error fetching product:', error));
    }
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setProduct(prevProduct => {
    if (!prevProduct) {
      return {
        id: Number(id),
        upc: name === 'upc' ? value : '',
        name: name === 'name' ? value : '',
        retailPrice: name === 'retailPrice' ? Number(value) : 0,
        wholesalePrice: name === 'wholesalePrice' ? Number(value) : 0,
        quantity: name === 'quantity' ? Number(value) : 0
      };
    }
    return {
      ...prevProduct,
      [name]: name === 'quantity' ? Number(value) : value
    };
  });
};

  const handleSave = () => {
    saveProduct(product).then((response) => {
      setProduct(response.data)
      alert('Product saved successfully!')
    })
    .catch(error => {
      alert(`Error saving product: ${error}`)
    });
  };

  return (
    <div className="edit-product">
      <h1>Edit Product</h1>
      <form>
        <div>
          <label>UPC: </label>
          <span>{product.upc}</span>
        </div>
        <div>
          <label>Name: </label>
          <input type="text" name="name" value={product.name} onChange={handleChange} />
        </div>
        <div>
          <label>Retail Price: </label>
          <input type="number" name="retailPrice" value={product.retailPrice} onChange={handleChange} />
        </div>
        <div>
          <label>Wholesale Price: </label>
          <input type="number" name="wholesalePrice" value={product.wholesalePrice} onChange={handleChange} />
        </div>
        <div>
          <label>Quantity: </label>
          <input type="number" name="quantity" value={product.quantity} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
}

export default EditProduct;
