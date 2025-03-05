import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import SidebarProvider from '../context/SidebarProvider'
import Sidebar from './Sidebar/Sidebar'

const MainLayout = () => {
  return (
    <>
      <SidebarProvider>
        <Header />
        <Sidebar />
      </SidebarProvider>
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout