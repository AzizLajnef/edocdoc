import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import DoctorProfilePage from './components/DoctorProfile/DoctorProfilePage';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <Router>
      <AnimatePresence>
        <Routes>
          <Route path="/" exact element={<DoctorProfilePage />} />
          <Route path="/Doc" exact element={<DoctorProfilePage />} />
        </Routes>
      </AnimatePresence>
      <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
    </Router>
  );
}

export default App;