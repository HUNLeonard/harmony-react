import { CSSProperties } from 'react';
import cn from '../utils/cn'
import { textFormatter } from '../utils/textFormatter';

interface PurchaseButtonProps {
  text: string
  style?: CSSProperties
  execute?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const PurchaseButton = ({ text, style = {}, execute }: PurchaseButtonProps) => {
  return (
    <div className="w-fit mx-auto">
      <button
        onClick={execute}
        className={cn("w-fit px-6 py-2 text-xl xs:text-2xl rounded-lg cursor-pointer",
          "bg-gray-dark/40 transition-colors relative overflow-hidden z-10 group",
          "hover:shadow-md hover:-translate-y-0.5 active:translate-y-0",
          "hover:scale-105 active:scale-95",
          " [transition:scale_0.2s,translate_0.2s,font-weight_0.2s] ease-in-out",
          "active:font-medium"
        )}
      >
        <div
          className={cn("absolute bottom-0 left-1/2 -translate-x-1/2",
            "w-12 h-full rounded-full blur-md -z-10",
            "transition-all duration-300",
            "group-hover:w-24 group-hover:blur-xl ",
            "group-active:blur-xl opacity-0 group-hover:opacity-50",
            "group-active:opacity-100 "
          )}
          style={style}
        ></div>
        {textFormatter(text)}
      </button>
    </div>
  )
}

export default PurchaseButton