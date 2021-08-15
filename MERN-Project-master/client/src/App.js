import './App.css';
import React, { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import { Router } from '@reach/router';
import Login from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import UnPrivateComponent from './HOCs/UnPrivateComponent';
import Main from './views/Main'
import About from './views/About';
import ProductsList from './views/ProductsList'
import ActivitysList from './views/ActivitysList'
import MainAdmin from './AdminPages/Main';
import OrdersAdmin from './AdminPages/Orders';
import NewsAdmin from './activityFolder/Main';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  return (
    <div className="App">

      <Header />
      <Router>
        <Main path="/" />
        <About path="/about" />
        <ProductsList path="/product" />
        <ActivitysList path="/news" />
        <Login path="/login" />
        <RegistrationForm path="/registration" />
        <UnPrivateComponent Component={MainAdmin} path="/adminmain" />
        <UnPrivateComponent Component={OrdersAdmin} path="/adminorders" />
        <UnPrivateComponent Component={NewsAdmin} path="/adminnews" />
      </Router>
      <Footer />
      
    </div>
  );
}

export default App;
