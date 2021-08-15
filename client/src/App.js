import './App.css'
import React from 'react'
import { Router } from '@reach/router'
// import Chat from './chatfolder/Chat'
// import Origin from './Original'

// import Main from './productFolder/Main'
// import Detail from './productFolder/Detail'
// import Update from './productFolder/Update'

// import MainActivity from './activityFolder/Main'
// import DetailActivity from './activityFolder/Detail'
// import UpdateActivity from './activityFolder/Update'

// import LalaChat from './chatfolder/LalaChat'

import Aboutus from './langs/About us'
import AdminSign from './views/AdminSign'
import AdminProduct from './views/AdminProduct'
import AdminActivity from './views/AdminActivity'
import AdminManagment from './views/AdminManagment'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsList from './views/ProductsList'
import ActivitysList from './views/ActivitysList'
import Main from './views/Main'
import About from './views/About'
function App() {
  const [name] = React.useState("")


  return (
    <div className="App">
      <Header />
      <Router>
        <Main path="/" />
        <About path="/about" />
        <ProductsList path="/product" />
        <ActivitysList path="/activity" />
        <AdminSign path="/admin" />
        <AdminProduct path="/admin/product" />
        <AdminActivity path="/admin/activity" />
        <AdminManagment path="/admin/management" />
      </Router>

      <Footer />

      {/* <Detail path="product/:id" />
        <Update path="product/:id/edit" />

        <MainActivity path="/activity" />
        <DetailActivity path="activity/:id" />
        <UpdateActivity path="activity/:id/edit" /> */}

      {/* <Chat path="/chat" />
        <LalaChat path="/lala" name={name} /> */}
      {/* 
      <h3>XxX End Main XxX</h3>
      <Origin /> */}
    </div>
  );
}

export default App;