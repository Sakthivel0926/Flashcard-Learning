// AppRouter.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Navigation from './Navigation'; // Import the Navigation component
import FlashcardPage from './components/FlashcardPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Navigation /> {/* Add the Navigation component */}
      <Routes>
        <Route path='/' element={<FlashcardPage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<App />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;