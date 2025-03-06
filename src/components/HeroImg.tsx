import { useCallback, useState } from 'react'
import { Product } from '../data/products';
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
    <ImgSwitcher img1={product.lightsOffsrc} img2={product.lightsOnsrc} name={product.name} isSwitched={lightsOn} >
      <ToggleButton value={lightsOn} toggle={toggleLight} />
      <BoxVerticalFaders />
      <BoxHorizontalFaders />
    </ImgSwitcher>

  )
}

export default HeroImg