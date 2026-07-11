import { Routes, Route } from 'react-router-dom'
import Layout from '@/components/Layout'
import ScrollToTop from '@/components/ScrollToTop'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Projects from '@/pages/Projects'
import NotFound from '@/pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}
