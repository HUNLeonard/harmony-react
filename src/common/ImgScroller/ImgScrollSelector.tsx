import cn from '../../utils/cn'

interface ImgScrollSelectorProps {
  quantity: number,
  imgIndex: number,
  setImgIndex: (arg: number) => void,
  images?: string[],
}


const ImgScrollSelector = ({ quantity, imgIndex, images, setImgIndex }: ImgScrollSelectorProps) => {
  return (<>
    {
      [...Array(quantity).keys()].map((idx) => (
        <button
          onClick={() => setImgIndex(idx)}
          key={idx}
          className={cn(
            "relative h-16 border rounded overflow-hidden aspect-video transition-all duration-200 hover:scale-105",
            idx === imgIndex
              ? "border-blue-600 shadow-md scale-105 bg-gray-dark"
              : "border-gray-300 opacity-80 bg-white cursor-pointer"
          )}>
          {
            images
              ?
              <>
                <img
                  src={images[idx]}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                />
                {idx === imgIndex && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></div>
                )}
              </>
              : <div className={cn("w-9/10 h-8/10 mx-auto rounded-md transition-colors duration-150")} />
          }

        </button>
      ))
    }
  </>
  )
}

export default ImgScrollSelector