import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import MainLayout from './layouts/MainLayout'
import ScrollToTop from './react-router-helper/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter basename='harmony-react'>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App