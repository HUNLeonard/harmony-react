import Header from './Header/Header'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import SidebarProvider from '../context/SidebarProvider'
import Sidebar from './Sidebar/Sidebar'
import ProductProvider from '../context/ProductProvider'

const MainLayout = () => {
  return (
    <>
      <SidebarProvider>
        <Header />
        <Sidebar />
      </SidebarProvider>
      <ProductProvider>
        <Outlet />
      </ProductProvider>
      <Footer />
    </>
  )
}

export default MainLayout