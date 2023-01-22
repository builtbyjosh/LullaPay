import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './pages/HomeScreen/HomeScreen';

import DaycareSignup from './pages/SignUpScreen/DaycareSignup';
import ParentSignup from './pages/SignUpScreen/ParentSignup';
import DaycareDashboard from './pages/DashboardScreen/DaycareDashboard';
import ParentDashboard from './pages/DashboardScreen/ParentDashboard';
import LoginScreen from './pages/LoginScreen/LoginScreen';

function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/daycare">
          <Route path="signup" element={<DaycareSignup />} />
          <Route path=":id" element={<DaycareDashboard />} />
        </Route>
        <Route path="/parent">
          <Route path="signup" element={<ParentSignup />} />
          <Route path=":id" element={<ParentDashboard />} />
        </Route>
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
