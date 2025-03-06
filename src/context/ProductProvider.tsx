import React, { createContext, useState } from 'react'
import { Product, products } from '../data/products';

interface ProductContext {
  product: Product,
  productId: number,
  setProductId: (arg: number) => void;
}

export const ProductContext = createContext<ProductContext | null>(null)

const ProductProvider = ({ children }: { children: React.ReactNode }) => {
  const [productId, setProductId] = useState(0);
  const product = products[productId];

  return (
    <ProductContext.Provider value={{ product, productId, setProductId }}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider