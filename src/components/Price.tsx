import { useProductContext } from '../hooks/useProductContext';
import PriceCol from '../common/PriceCol';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import cn from '../utils/cn';

const Price = () => {
  const { product } = useProductContext();

  const priceObserver = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      ref={priceObserver.setRef}
      className={cn(
        "relative w-full py-16 bg-gradient-to-b from-gray-dark to-gray-darkest"
      )}
    >
      <h2 className="text-3xl md:text-4xl font-garamond font-extrabold text-center mb-12 text-gray-light z-10">
        Choose The Model
      </h2>

      <div className={cn("flex flex-col md:flex-row max-md:items-center justify-center gap-6 lg:gap-8",
        "animate-fade-in-up",
        priceObserver.isIntersecting ? 'animated' : ''
      )}
      >
        <PriceCol type={1} price={product.price.regular} name='regular' benefits={product.benefits} />
        <PriceCol type={2} price={product.price.premium} name='premium' benefits={product.benefits} />
        <PriceCol type={3} price={product.price.ultimate} name='ultimate' benefits={product.benefits} />
      </div>
    </section>
  )
}

export default Price;