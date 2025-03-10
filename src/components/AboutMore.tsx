import LeftSide from '../common/divider/LeftSide'
import RightSide from '../common/divider/RightSide'
import cn from '../utils/cn'
import ProductText from '../common/ProductText';
import { useProductContext } from '../hooks/useProductContext';
import ImgSelector from '../common/ImgScroller/ImgScroller';

const AboutMore = () => {
  const { product } = useProductContext();


  return (
    <section className={cn('relative flex flex-col-reverse lg:flex-row gap-4 max-w-[100vw] h-full bg-gradient-to-b from-gray-lightest to-gray-light mb-0')}>

      <LeftSide className=" h-full w-full px-2 xs:px-4 lg:pt-[2%] lg:px-[5%] space-y-8 lg:sticky top-1/16 flex flex-col">
        <ProductText name={product.name} text={product.longDesc} />
      </LeftSide>
      <RightSide className={cn('lg:!max-h-fit bg-gray-medium/10 pb-8 max-lg:shadow-md ',
        'lg:rounded-l-4xl 3xl:rounded-4xl lg:sticky top-1/4 overflow-hidden')}>
        <ImgSelector images={product.images} />
      </RightSide>
    </section>
  )
}

export default AboutMore