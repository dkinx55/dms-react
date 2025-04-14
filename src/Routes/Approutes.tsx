
import { Routes, Route } from 'react-router-dom';
import Login from '../Pages/Login';
import Signup from '../Pages/SignUpPage';
import Dashboard from '../Pages/Dashboard';
import Upload from '../Pages/FileUpload';
import MyDocuments from '../Pages/MyDocuments';
import SharedDocuments from '../Pages/SharedDocuments';
import Search from '../Pages/SearchFile';
import Trash from '../Pages/Trash';
import Settings from '../Pages/SettingsPage';

const AppRoutes = () => {
  return (
    <Routes>
      {/* Login Route */}
      <Route path="/" element={<Login />} />
      
      {/* Signup Route */}
      <Route path="/signup" element={<Signup />} />
      
      {/* Dashboard Route (protected, only accessible after login) */}
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* File Management Routes */}
      <Route path="/upload" element={<Upload />} />
      <Route path="/my-documents" element={<MyDocuments />} />
      <Route path="/shared-documents" element={<SharedDocuments />} />
      
      {/* Search and Trash */}
      <Route path="/search" element={<Search />} />
      <Route path="/trash" element={<Trash />} />
      
      {/* Settings Route */}
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
};

export default AppRoutes;
