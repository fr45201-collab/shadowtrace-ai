
import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ScanPage from './pages/ScanPage';
import ResultsPage from './pages/ResultsPage';
import EducationPage from './pages/EducationPage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import FeedbackPage from './pages/FeedbackPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ScanResult } from './types';

const App: React.FC = () => {
  const [lastResult, setLastResult] = useState<ScanResult | null>(null);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col text-slate-200 bg-slate-950">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/scan" element={<ScanPage onScanComplete={setLastResult} />} />
            <Route path="/results" element={<ResultsPage result={lastResult} />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/feedback" element={<FeedbackPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
