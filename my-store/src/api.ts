import axios from "axios";
import { Product } from "./data/products";
import { ShoppingCartRequest } from "./data/ShoppingCart";

const API_BASE_URL = "http://localhost:8080/api";

export const getProducts = () => {
  return axios.get(`${API_BASE_URL}/inventory/products`);
};

export const getProductById = (id: number) => {
  return axios.get(`${API_BASE_URL}/inventory/product/${id}`);
};

export const saveProduct = (product: Product) => {
  return axios.post(`${API_BASE_URL}/inventory/add-product`, product);
};

export const addToCart = (shoppingCartItem: ShoppingCartRequest) => {
  return axios.post(`${API_BASE_URL}/shopping-cart/add-to-cart`, shoppingCartItem);
};

export const getCartItems = () => {
  return axios.get(`${API_BASE_URL}/shopping-cart/add-total`);
};

export const checkout = (ids?: number[]) => {
  return axios.post(`${API_BASE_URL}/shopping-cart/checkout`, ids);
};

export const allShoppingCartItem = () => {
  return axios.get(`${API_BASE_URL}/shopping-cart/all-items`);
  
};
