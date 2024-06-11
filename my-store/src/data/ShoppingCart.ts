import { Product } from "./products";

export interface ShoppingCartRequest {
    shoppingCartId?: number;
    productId: number;
    purchaseQuantity: number;
}

export interface ShoppingCartResponse {
    id: number;
    productId: number;
    purchaseQuantity: number;
    product: Product;
}