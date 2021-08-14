import './App.css';
import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import { Router } from '@reach/router';
import Login from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import UnPrivateComponent from './HOCs/UnPrivateComponent';
// import RelativeViews from './ccmponents/RelativeViews';

// import Dashboard from "./components/dashboard/Dashboard";
import LandingPage from './productFolder/Main';
import MainAct from './activityFolder/Main';
import MainAdmin from './AdminPages/Main';
import OrdersAdmin from './AdminPages/Orders';
import NewsAdmin from './activityFolder/Main';
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsList from './views/ProductsList'
import ActivitysList from './views/ActivitysList'
import Main from './views/Main'
import About from './components/About';

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  console.log(user);
  console.log(isAuthenticated);
  return (
    <div className="App">

      <Header />
      <Router>
        <LandingPage path="/home" />
        <Login path="/login" />
        <RegistrationForm path="/registration" />
        <UnPrivateComponent Component={MainAdmin} path="/adminmain" />
        <UnPrivateComponent Component={OrdersAdmin} path="/adminorders" />
        <UnPrivateComponent Component={NewsAdmin} path="/adminnews" />
        <Main path="/" />
        <About path="/about" />
        <ProductsList path="/product" />
        <ActivitysList path="/activity" />
      </Router>

      <Footer />


    </div>
  );
}

export default App;
