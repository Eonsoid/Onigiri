import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import pages
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignUpPage';
import Homepage from './homepage';
import CategoryPage from './CategoryPage';
import FavoritePage from './FavoritePage';
import MessagesPage from './MessagesPage';
import OrderHistoryPage from './OrderHistoryPage';
import OthersPage from './OthersPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/order-history" element={<OrderHistoryPage />} />
        <Route path="/others" element={<OthersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
