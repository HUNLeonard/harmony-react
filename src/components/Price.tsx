import { useProductContext } from '../hooks/useProductContext'
import PriceCol from '../common/PriceCol';

const Price = () => {
  const { product } = useProductContext();

  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-gray-dark to-gray-darkest">

      <h2 className="text-3xl md:text-4xl font-garamond font-extrabold text-center mb-12 text-gray-light z-10">
        Choose The Modell
      </h2>

      <div className="flex flex-col md:flex-row max-md:items-center justify-center gap-6 lg:gap-8">
        <PriceCol type={1} price={product.price.regular} name='regular' benefits={product.benefits} />
        <PriceCol type={2} price={product.price.premium} name='premium' benefits={product.benefits} />
        <PriceCol type={3} price={product.price.ultimate} name='ultimate' benefits={product.benefits} />

      </div>

    </section>
  )
}

export default Price