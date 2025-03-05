import DesktopNavbar from './DesktopNavbar'
import MobilNavbar from './MobilNavbar'

const NavManager = () => {
  return (
    <nav className='mr-2 '>
      <DesktopNavbar />
      <MobilNavbar />
    </nav>
  )
}

export default NavManager