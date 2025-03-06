import { ArrowBigLeftIcon, ArrowBigRightIcon } from 'lucide-react'
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
        className={cn("absolute top-1/10 bottom-1/10 bg-gray cursor-pointer z-20",
          " hover:bg-gray-dark/20 transition-colors duration-200 ease-in-out")}>
        <ArrowBigLeftIcon size={48} />
      </button>
      <button
        onClick={rightClick}
        className={cn("absolute top-1/10 bottom-1/10 right-0 bg-gray cursor-pointer z-20",
          " hover:bg-gray-dark/20 transition-colors duration-200 ease-in-out")}>
        <ArrowBigRightIcon size={48} />
      </button>
    </>
  )
}

export default ImgScrollButtons