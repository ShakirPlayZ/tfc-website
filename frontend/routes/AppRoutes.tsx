import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/Home';
import NewspaperPage from '../src/pages/Newspaper';

import NotFound from '../src/pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newspaper" element={<NewspaperPage />} />

        {/* Fallback-Route */}
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
