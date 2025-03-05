import cn from '../../utils/cn'
import { NAVLINKS } from '../../data/navlinks'
import LinkLister from '../../common/LinkLister'

const DesktopNavbar = () => {
  return (
    <ul className={cn('list-none hidden md:flex gap-4 text-primary '
    )}>
      <LinkLister links={NAVLINKS} className="w-14" />
    </ul>
  )
}

export default DesktopNavbar