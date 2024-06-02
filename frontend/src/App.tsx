import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginForm } from './components/LoginForm';
import { ProtectedPage } from './components/ProtectedPage';
import { ProtectedRoute } from './components/ProtectedRoute';

export const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        {/* <Route path="/protected" element={<ProtectedPage />} /> */}
        <Route path="/protected" element={<ProtectedRoute element={<ProtectedPage />} />} />
      </Routes>
    </Router>
  );
};

export default App;
