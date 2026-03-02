import { Routes, Route } from 'react-router-dom';
import Screen1 from './pages/Screen1';
import Screen2 from './pages/Screen2';
import Screen3 from './pages/Screen3';
import Screen4 from './pages/Screen4';
import Screen5 from './pages/Screen5';
import DashboardLayout from './layouts/DashboardLayout';

function App() {
  return (
    <Routes>
      {/* Landing page without sidebar */}
      <Route path="/" element={<Screen1 />} />

      {/* Investor portal with sidebar layout */}
      <Route element={<DashboardLayout />}>
        <Route path="/platform" element={<Screen2 />} />
        <Route path="/financials" element={<Screen3 />} />
        <Route path="/investment" element={<Screen4 />} />
        <Route path="/team" element={<Screen5 />} />
      </Route>
    </Routes>
  );
}

export default App;
