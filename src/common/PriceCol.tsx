import { CSSProperties } from "react";
import cn from "../utils/cn";
import { textFormatter } from "../utils/textFormatter";
import { priceFormatted } from "../utils/priceFormatted";
import PurchaseButton from "./PurchaseButton";
import { Product } from "../data/products";
import { renderHighlightedText } from "../utils/renderHighlightedText";

interface PriceColProps {
  price: number;
  name: string;
  type: 1 | 2 | 3;
  benefits: Product["benefits"];
}

const bgColor = [
  { background: `linear-gradient(147deg, rgb(185 46 46), rgba(17, 24, 39, 0) 20%)` },
  { background: `linear-gradient(147deg, rgba(213,80,173, 1), rgba(17, 24, 39, 0) 20%)` },
  { background: `linear-gradient(147deg, oklch(0.623 0.214 259.815), rgba(17, 24, 39, 0) 20%)` }
]

const textColor = [
  { background: "linear-gradient(147deg, rgb(185 46 46), #e5e7eb 100%)", backgroundClip: "text", color: "transparent" },
  { background: `linear-gradient(147deg, oklch(0.623 0.214 259.815), oklch(0.558 0.288 302.321))`, backgroundClip: "text", color: "transparent" },
  { background: `linear-gradient(147deg, oklch(0.558 0.288 302.321), oklch(0.623 0.214 259.815))`, backgroundClip: "text", color: "transparent" }
]

const mainColors: CSSProperties[] = [
  { background: "var(--color-regular)" },
  { background: "var(--color-premium)" },
  { background: "var(--color-ultimate)" }
]

const PriceCol = ({ price, type = 1, name, benefits }: PriceColProps) => {
  const typeStyle = bgColor[type - 1] as CSSProperties
  const textStyle = textColor[type - 1] as CSSProperties
  const mainColor = mainColors[type - 1]

  const getBenefits = () => {
    switch (type) {
      case 1:
        return benefits.regular;
      case 2:
        return [...benefits.regular, ...benefits.premium];
      case 3:
        return [...benefits.regular, ...benefits.premium, ...benefits.ultimate];
      default:
        return benefits.regular;
    }
  }


  return (
    <article
      className={cn(
        "relative w-full h-auto p-4 rounded-4xl backdrop-blur-xs",
        "border border-gray-dark/50 overflow-hidden bg-gray-darkest text-gray-light max-w-92"
      )}
    >
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={typeStyle}
      ></div>
      <div className="space-y-4 pb-8">
        <h2 className={cn("font-garamond font-medium text-xl xs:text-2xl w-fit mx-auto")}
          style={textStyle}
        >
          {textFormatter(name)}
        </h2>
        <div className="w-full grid place-content-center text-4xl font-bold" style={textStyle}>{priceFormatted(price)}</div>
        <PurchaseButton text="Purchase" style={mainColor} />
      </div>

      <div className="space-y-2">
        <h3 className="font-medium w-fit" style={textStyle}>Key Features</h3>
        <ul className="space-y-2 border-t border-gray-dark pt-2 cursor-default">
          {getBenefits().map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-sm mt-1">•</span>
              <span>{renderHighlightedText(benefit)}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default PriceCol;