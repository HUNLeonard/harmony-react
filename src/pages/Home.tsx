import About from "../components/About"
import AboutMore from "../components/AboutMore"
import ProductDetails from "../components/Details"
import Price from "../components/Price"

const Home = () => {
  return (
    <main className='relative min-h-[2000px] max-w-10xl mx-auto mt-[var(--header-height)] space-y-8'>
      <About />
      <div className='invisible absolute -mt-20 left-0 right-0 h-1 bg-yellow z-50' id="about"></div>
      <AboutMore />
      <div className='invisible absolute left-0 right-0 h-1 bg-yellow z-50' id="details"></div>
      <ProductDetails />
      <div className='invisible absolute left-0 right-0 h-1 bg-yellow z-50' id="price"></div>
      <Price />
    </main>
  )
}

export default Home