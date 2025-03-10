import React from "react";
import { renderHighlightedText } from "../utils/renderHighlightedText";
import cn from "../utils/cn";
import { ChevronDown } from "lucide-react";

const ProductText = ({
  name,
  text,
  children,
}: {
  name: string;
  text: string;
  children?: React.ReactNode;
}) => {
  const descFragments = (text || "").split("\n");

  return (
    <>
      <h1
        className={cn(
          "shrink-0 text-[2.5rem] sm:text-5xl lg:text-[clamp(12px,6vh,48px)] ",
          "font-garamond font-extrabold line-clamp-2 tracking-tight",
          "bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900 ",
        )}
      >
        {name}
      </h1>
      {children}

      <div
        className={cn(
          "space-y-4 p-6 bg-gradient-to-br from-gray-lightest to-gray-light shadow",
          " rounded-2xl h-auto overflow-y-auto fancy-scrollbar border border-gray-light/50 relative",
        )}
      >
        <div
          className={cn(
            "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600",
          )}
        />
        {descFragments.map((frag, index) => (
          <p
            key={index}
            className="whitespace-pre-line lg:text-[clamp(12px,3vh,24px)] cursor-default"
          >
            {renderHighlightedText(frag)}
          </p>
        ))}
        <div className="pt-4 flex justify-end">
          <a
            href="#details"
            className={cn("inline-flex items-center gap-2 text-blue-700 hover:text-blue-800",
              " font-medium transition-colors duration-200")}
          >
            Learn more
            <ChevronDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </>
  );
};

export default ProductText;
