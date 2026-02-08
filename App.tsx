import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import Curriculum from './pages/Curriculum';
import Instructor from './pages/Instructor';
import Reviews from './pages/Reviews';
import Apply from './pages/Apply';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/instructor" element={<Instructor />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
