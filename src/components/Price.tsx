import { useProductContext } from '../hooks/useProductContext'
import PriceCol from '../common/PriceCol';

const Price = () => {
  const { product } = useProductContext();

  return (
    <section className="w-full py-16 bg-gray-darkest">
      <h2 className="text-3xl md:text-4xl font-garamond text-center mb-12 text-gray-light">
        Choose The Modell
      </h2>

      <div className="flex flex-col md:flex-row max-md:items-center  justify-center gap-4 px-4">
        <PriceCol type={1} price={product.price.regular} name='regular' benefits={product.benefits} />
        <PriceCol type={2} price={product.price.premium} name='premium' benefits={product.benefits} />
        <PriceCol type={3} price={product.price.ultimate} name='ultimate' benefits={product.benefits} />

      </div>
    </section>
  )
}

export default Price