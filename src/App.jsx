import { Route, Routes, useLocation, Navigate } from 'react-router-dom'
import React, { Suspense } from 'react'
import NotFound from './pages/shared/NotFound'
import Loader from './pages/shared/Loader'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './pages/shared/Navbar'
import Footer from './pages/shared/Footer'
import BlogDetail from './pages/Blog/BlogDetail'
import Achievement from './pages/About/Achievement'
import Userboard from './pages/Contact/Userboard'
import BlogCard from './pages/Blog/BlogCard'
import { allBlogDetailsData } from '../src/pages/Blog/BlogJson'

const Home = React.lazy(() => import('./pages/Home/Home'))
const Project = React.lazy(() => import('./pages/Project/Project'))

function App() {
  const location = useLocation()
  const isFalse = location.pathname.includes('404')
  return (
    <>
      <ScrollToTop />
      {isFalse || <Navbar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path='/about' element={<Achievement />} />
          <Route path='/project' element={<Project />} />

          <Route path='/contact' element={<Userboard />} />
          <Route path='/blog' element={<BlogCard />} />
          <Route
            path='/blog/:id'
            element={<BlogDetail blogData={allBlogDetailsData} />}
          />
          <Route path='/404' element={<NotFound />} />
          <Route path='*' element={<Navigate replace to='/404' />}></Route>
        </Routes>
      </Suspense>
      {isFalse || <Footer />}
    </>
  )
}

export default App
