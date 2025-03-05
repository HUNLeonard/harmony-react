import { useState } from 'react';
import cn from '../utils/cn'
import { products } from '../data/products';
import HeroImg from './HeroImg';
import HeroText from './HeroText';


const About = () => {
  const [productId, setProductId] = useState(0);
  const product = products[productId];

  return (
    <section className={cn('flex flex-col lg:flex-row max-lg:gap-4 max-w-[100vw]',
      'h-full ')}>
      <HeroImg product={product} />
      <HeroText product={product}>
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
      </HeroText>
    </section>
  )
}

export default About