import { Routes, Route } from 'react-router-dom';
import NewspaperPage from '../src/pages/Newspaper';

import NotFound from '../src/pages/NotFound';

export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<NewspaperPage />} />

        {/* Fallback-Route */}
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
