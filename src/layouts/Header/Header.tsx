import { useEffect, useRef, useState } from 'react'
import cn from '../../utils/cn'
import Logo from './Logo'
import NavManager from './NavManager'

const Header = () => {
  const [scrollingUp, setScrollingUp] = useState(false);
  const prevScrollY = useRef(0);

  useEffect(() => {
    const controller = new AbortController();
    const handleScrolling = () => {
      const currentScrollY = window.scrollY;

      setScrollingUp(window.scrollY > 80 && currentScrollY > prevScrollY.current)
      prevScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScrolling, { signal: controller.signal })
    handleScrolling();
    return () => { controller.abort() }
  }, [setScrollingUp])

  return (
    <header className={cn('bg-gray-darkest fixed top-0 left-0 right-0 h-[var(--header-height)]',
      'transition-[height] duration-200 z-50 shadow-lg',
      scrollingUp ? "[--header-height:3rem]" : ""
    )}>
      {/* -translate-y-[var(--header-height)] */}
      <div className='max-w-10xl mx-auto h-full flex justify-between items-center'>
        <Logo />
        <NavManager />
      </div>
    </header>
  )
}

export default Header