import { ChevronLeft, ChevronRight } from 'lucide-react'
import cn from '../../utils/cn'

interface ImgScrollButtonsProps {
  leftClick: () => void,
  rightClick: () => void,
}

const ImgScrollButtons = ({ leftClick, rightClick }: ImgScrollButtonsProps) => {
  return (
    <>
      <button
        onClick={leftClick}
        className={cn("absolute left-2 top-1/2 -translate-y-1/2 bg-gray-lightest/80 text-blue-600",
          " hover:text-blue-700 h-10 w-10 rounded-full flex items-center justify-center z-30 shadow-md ",
          "backdrop-blur-sm transition-all duration-200 hover:scale-105 cursor-pointer")}>
        <ChevronLeft size={48} />
      </button>
      <button
        onClick={rightClick}
        className={cn("absolute right-2 top-1/2 -translate-y-1/2  bg-gray-lightest/80 text-blue-600",
          " hover:text-blue-700 h-10 w-10 rounded-full flex items-center justify-center z-30 shadow-md",
          "backdrop-blur-sm transition-all duration-200 hover:scale-105 cursor-pointer")}>
        <ChevronRight size={48} />
      </button>
    </>
  )
}

export default ImgScrollButtons