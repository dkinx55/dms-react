import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppRoutes from './Routes/Approutes'; // Import the AppRoutes
import Sidebar from './components/Sidebar';
import LoginPage from './Pages/Login'; // Assuming this is your login component
import SignupPage from './Pages/SignUpPage'; // Assuming this is your signup component
import Topbar from './components/Topbar'; // Import Topbar component

const AppLayout: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-100">
        <Topbar /> {/* ✅ Topbar added here */}
        <div className="flex-1 overflow-auto p-4">
          <AppRoutes />
        </div>
      </div>
    </div>
  );
};
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for authentication pages */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Define main layout with sidebar for authenticated routes */}
        <Route path="/*" element={<AppLayout />} />
      </Routes>
    </Router>
  );
};

export default App;
