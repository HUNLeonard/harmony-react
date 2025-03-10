import { ChevronDown } from "lucide-react";
import { Product } from "../data/products";
import cn from "../utils/cn";

type ProductSelector = {
  products: Product[];
  productId: number;
  setProductId: (arg: number) => void;
}

const ProductSelector = ({ products, productId, setProductId }: ProductSelector) => {
  return (
    <div className="relative">
      <select
        name="productSelect"
        value={productId}
        onChange={(e) => setProductId(Number(e.target.value))}
        className={cn(
          "w-full appearance-none bg-white border-2 border-gray-light/80 ",
          "px-4 py-3 rounded-xl text-gray-darkest pr-10 focus:border-blue-600",
          "focus:outline-none focus:ring-2 focus:ring-blue-600/30 transition-all duration-200 shadow-md",
        )}
      >
        {products.map((prod, index) => (
          <option key={prod.name} value={index}>
            {prod.name}
          </option>
        ))}
      </select>
      <div className={cn("absolute right-0 top-0 bottom-0 w-12",
        " bg-gradient-to-l from-blue-600 to-transparent rounded-r-xl",
        " flex items-center justify-center pointer-events-none")}>
        <ChevronDown className="text-white" size={20} />
      </div>
    </div>
  );
};

export default ProductSelector;
