import { useContext } from "react";
import { ProductContext } from "../context/ProductProvider";

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("Product context was not provided");
  }

  return context;
};
