import React from "react";

const ProductText = ({
  name,
  text,
  children,
}: {
  name: string,
  text: string,
  children?: React.ReactNode;
}) => {
  const descFragments = (text || "").split("\n");

  return (
    <>
      <h1 className="shrink-0 text-[2.5rem] sm:text-5xl lg:text-[clamp(12px,6vh,48px)] font-garamond font-extrabold line-clamp-2 ">
        {name}
      </h1>
      {children}

      <div className="space-y-4 p-4 bg-gray-light rounded-2xl h-auto overflow-y-auto fancy-scrollbar">
        {descFragments.map((frag) => (
          <p
            key={frag}
            className="whitespace-pre-line lg:text-[clamp(12px,3vh,24px)]"
          >
            {frag}
          </p>
        ))}

      </div>
    </>
  );
};

export default ProductText;
