
import cn from '../utils/cn'
import { products } from '../data/products';
import HeroImg from './HeroImg';
import ProductText from '../common/ProductText';
import RightSide from '../common/RightSide';
import LeftSide from '../common/LeftSide';
import { useProductContext } from '../hooks/useProductContext';


const About = () => {
  const { product, productId, setProductId } = useProductContext();

  return (
    <section className={cn('relative flex flex-col lg:flex-row max-lg:gap-4 max-w-[100vw] h-full ')}>
      <LeftSide className='bg-gray-light max-lg:shadow-md lg:rounded-r-4xl 3xl:rounded-4xl'>
        <HeroImg product={product} />
      </LeftSide>
      <RightSide className="px-2 xs:px-4 lg:pt-[2%] lg:px-[5%] lg:sticky top-1/12  flex flex-col">
        <ProductText name={product.name} text={product.firsDesc}>
          <select
            name="productSelect"
            value={productId}
            onChange={(e) => setProductId(Number(e.target.value))}
            className='w-full bg-white border-2 px-4 py-2 rounded-2xl'
          >
            {products.map((prod, index) => (
              <option key={prod.name} value={index}>
                {prod.name}
              </option>
            ))}
          </select>
        </ProductText>
      </RightSide>

    </section>
  )
}

export default About