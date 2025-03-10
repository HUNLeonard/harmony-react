import cn from "../utils/cn";
import { products } from "../data/products";
import HeroImg from "./HeroImg";
import ProductText from "../common/ProductText";
import RightSide from "../common/divider/RightSide";
import LeftSide from "../common/divider/LeftSide";
import { useProductContext } from "../hooks/useProductContext";
import ProductSelector from "../common/ProductSelector";

const About = () => {
  const { product, productId, setProductId } = useProductContext();

  return (
    <section
      className={cn(
        "relative flex flex-col lg:flex-row max-lg:gap-4 max-w-[100vw] h-full ",
      )}
    >
      <LeftSide className="bg-gray-light max-lg:shadow-md lg:rounded-r-4xl 3xl:rounded-4xl">
        <HeroImg product={product} />
      </LeftSide>
      <RightSide className="px-2 xs:px-4 lg:pt-[2%] lg:px-[5%] lg:sticky top-1/12  flex flex-col">

        <ProductText name={product.name} text={product.shortDesc}>
          <ProductSelector
            products={products}
            setProductId={setProductId}
            productId={productId}
          />
        </ProductText>
      </RightSide>
    </section>
  );
};

export default About;
