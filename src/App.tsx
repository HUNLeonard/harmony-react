import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import MainLayout from './layouts/MainLayout'
import ScrollToTop from './react-router-helper/ScrollToTop'

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App