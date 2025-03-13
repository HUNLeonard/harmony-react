import cn from '../utils/cn'
import { products } from '../data/products';
import HeroImg from './HeroImg';
import ProductText from '../common/ProductText';
import RightSide from '../common/divider/RightSide';
import LeftSide from '../common/divider/LeftSide';
import { useProductContext } from '../hooks/useProductContext';
import { ChevronDown } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';


const About = () => {
  const { product, productId, setProductId } = useProductContext();

  const leftSideObserver = useIntersectionObserver({ threshold: 0.2 });
  const rightSideObserver = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section className={cn('relative flex flex-col ',
      'lg:flex-row max-lg:gap-4 max-w-[100vw] h-full',
      'overflow-x-hidden')}>
      <LeftSide
        ref={leftSideObserver.setRef}
        className={cn(
          'bg-gray-light max-lg:shadow-md lg:rounded-r-4xl 3xl:rounded-4xl',
          'animate-fade-in-left',
          leftSideObserver.isIntersecting ? 'animated' : ''
        )}
      >
        <HeroImg product={product} />
      </LeftSide>
      <RightSide
        ref={rightSideObserver.setRef}
        className={cn(
          "px-2 xs:px-4 lg:pt-[2%] lg:px-[5%] lg:sticky top-1/12 flex flex-col",
          "animate-fade-in-right",
          rightSideObserver.isIntersecting ? 'animated' : ''
        )}
      >
        <ProductText name={product.name} text={product.shortDesc}>
          <div className="relative mb-6">
            <select
              name="productSelect"
              value={productId}
              onChange={(e) => setProductId(Number(e.target.value))}
              className="w-full appearance-none bg-gray-lightest border-2 border-gray-light px-4 py-3 rounded-xl text-gray-darkest pr-10 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600/30 transition-all duration-200 shadow-md"
            >
              {products.map((prod, index) => (
                <option key={prod.name} value={index}>
                  {prod.name}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-dark pointer-events-none" size={20} />
          </div>
        </ProductText>
      </RightSide>
    </section>
  )
}

export default About