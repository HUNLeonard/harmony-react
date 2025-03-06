import { useState } from "react"
import ImgScrollButtons from "./ImgScrollButtons";
import ImgScrollSelector from "./ImgScrollSelector";
import ImgScrollList from "./ImgScrollList";
import BoxHorizontalFaders from "../BoxHorizontalFaders";
import BoxVerticalFaders from "../BoxVerticalFaders";

const ImgScroller = ({ images }: { images: string[] }) => {
  const [imgIndex, setImageIndex] = useState(0);

  const showNextImage = () => {
    setImageIndex(index => {
      if (index === images.length - 1) {
        return 0;
      }
      return index + 1;
    })
  }

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) {
        return images.length - 1;
      }
      return index - 1;
    })
  }



  return (
    <div className='-mt-4 w-3/4 h-auto relative flex flex-col justify-between mx-auto gap-2 xs:gap-4'>
      <div className='relative w-full h-2/3 flex overflow-hidden'>
        <ImgScrollList images={images} imgIndex={imgIndex} />
        <BoxHorizontalFaders />
        <BoxVerticalFaders />
        <ImgScrollButtons leftClick={showPrevImage} rightClick={showNextImage} />
      </div>
      <div className='absolute top-19/20 xs:top-9/10 w-full flex gap-4 px-4 md:px-12  z-20'>
        <ImgScrollSelector quantity={images.length} imgIndex={imgIndex} setImgIndex={setImageIndex} />
      </div>
    </div>
  )
}

export default ImgScroller