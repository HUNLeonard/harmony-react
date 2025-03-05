import cn from '../../utils/cn'
import { useSidebarContext } from '../../hooks/useSidebarContext';
import { NAVLINKS } from '../../data/navlinks';
import LinkLister from '../../common/LinkLister';
import Logo from '../Header/Logo';

const Sidebar = () => {
  const { isSidebarOpen } = useSidebarContext();

  return (
    <aside
      className={cn(
        "fixed top-0 bottom-0 right-0 flex flex-col md:hidden bg-gray-dark border-l border-gray-darkest/30",
        "transition-all duration-500 delay-100 z-40 ",
        !isSidebarOpen ? "translate-x-full" : "translate-x-0 shadow-[0px_0px_20px_2px_rgba(0,0,0,0.4)]"
      )}
    >
      <div className='bg-linear-0 from-transparent from-0% to-white/10 w-fit h-fit'>
        <Logo />
      </div>
      <ul className='px-4 divide-y-2 divide-gray-light/10 w-full mx-auto'>
        <LinkLister links={NAVLINKS} className='w-full text-center  text-gray-light text-lg p-4' />
      </ul>


    </aside>
  )
}

export default Sidebar