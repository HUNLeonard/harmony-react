import React from "react";
import { Product } from "../data/products";
import cn from "../utils/cn";

const HeroText = ({
  product,
  children,
}: {
  product: Product;
  children?: React.ReactNode;
}) => {
  const descFragments = product.firsDesc.split("\n");

  return (
    <div className={cn("h-full px-2 xs:px-4 lg:py-[2%] lg:px-[5%] w-full lg:flex-1 flex flex-col gap-4 xl:gap-8",
      "text-gray-darkest lg:max-h-[calc(100vh-(var(--header-height)))]")}>
      <h1 className="shrink-0 text-3xl sm:text-4xl lg:text-[clamp(12px,6vh,48px)] font-garamond font-extrabold line-clamp-2 ">
        {product.name}
      </h1>
      {children}

      <div className="space-y-4 p-4 bg-gray-light rounded-2xl h-full overflow-y-auto fancy-scrollbar">
        {descFragments.map((frag) => (
          <p
            key={frag}
            className="whitespace-pre-line text-lg lg:text-[clamp(6px,3vh,24px)]"
          >
            {frag}
          </p>
        ))}

      </div>
    </div>
  );
};

export default HeroText;
