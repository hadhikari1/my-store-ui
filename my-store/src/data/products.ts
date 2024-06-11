export interface Product {
  id: number;
  upc: string;
  name: string;
  retailPrice: number;
  wholesalePrice: number;
  quantity: number;
}

// export const products: Product[] = [
//   { upc: "123456789012", name: "Product 1", retailPrice: 29.99, wholesalePrice: 19.99, quantity: 100 },
//   { upc: "234567890123", name: "Product 2", retailPrice: 49.99, wholesalePrice: 29.99, quantity: 150 },
//   { upc: "345678901234", name: "Product 3", retailPrice: 39.99, wholesalePrice: 24.99, quantity: 200 },
//   { upc: "456789012345", name: "Product 4", retailPrice: 59.99, wholesalePrice: 34.99, quantity: 250 },
//   { upc: "567890123456", name: "Product 5", retailPrice: 69.99, wholesalePrice: 44.99, quantity: 50 },
//   { upc: "678901234567", name: "Product 6", retailPrice: 19.99, wholesalePrice: 14.99, quantity: 300 },
//   { upc: "789012345678", name: "Product 7", retailPrice: 99.99, wholesalePrice: 79.99, quantity: 10 },
//   { upc: "890123456789", name: "Product 8", retailPrice: 9.99, wholesalePrice: 5.99, quantity: 500 },
//   { upc: "901234567890", name: "Product 9", retailPrice: 89.99, wholesalePrice: 59.99, quantity: 80 },
//   { upc: "012345678901", name: "Product 10", retailPrice: 79.99, wholesalePrice: 49.99, quantity: 120 },
// ];
