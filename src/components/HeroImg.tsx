import { useCallback, useState } from 'react'
import { Product } from '../data/products';
import cn from '../utils/cn';
import ToggleButton from '../common/ToggleButton';
import ImgSwitcher from '../common/ImgSwitcher';
import BoxVerticalFaders from '../common/BoxVerticalFaders';
import BoxHorizontalFaders from '../common/BoxHorizontalFaders';

const HeroImg = ({ product }: { product: Product }) => {
  const [lightsOn, setLightsOn] = useState(true);

  const toggleLight = useCallback(() => {
    setLightsOn(p => !p)
  }, [setLightsOn])

  return (
    <div className={cn('relative lg:max-h-[calc(100vh-var(--header-height))]',
      'flex-1 max-lg:shadow-md bg-gray-light lg:rounded-r-4xl 3xl:rounded-4xl lg:overflow-hidden')}>
      <ImgSwitcher img1={product.lightsOffsrc} img2={product.lightsOnsrc} name={product.name} isSwitched={lightsOn} >
        <ToggleButton value={lightsOn} toggle={toggleLight} />
        <BoxVerticalFaders />
        <BoxHorizontalFaders />
      </ImgSwitcher>
    </div>
  )
}

export default HeroImg