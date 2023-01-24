import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import LoginScreen from './pages/LoginScreen/LoginScreen';
import SignupScreen from './pages/SignUpScreen/SignupScreen';
import DashboardScreen from './pages/DashboardScreen/DashboardScreen';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
