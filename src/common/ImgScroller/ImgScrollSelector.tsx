import cn from '../../utils/cn'

interface ImgScrollSelectorProps {
  quantity: number,
  imgIndex: number,
  setImgIndex: (arg: number) => void
}


const ImgScrollSelector = ({ quantity, imgIndex, setImgIndex }: ImgScrollSelectorProps) => {
  return (<>
    {
      [...Array(quantity).keys()].map((val) => (
        <button
          onClick={() => setImgIndex(val)}
          key={val}
          className={cn("w-full min-h-6 h-full rounded-lg overflow-hidden aspect-video border",
            "transition duration-150 ease-in-out hover:saturate-50 cursor-pointer",
            val === imgIndex ? "*:bg-gray-darkest" : "border-transparent *:bg-gray-medium"
          )}>
          <div className={cn("w-9/10 h-8/10 mx-auto rounded-md transition-colors duration-150")}>
          </div>
        </button>
      ))
    }
  </>
  )
}

export default ImgScrollSelector