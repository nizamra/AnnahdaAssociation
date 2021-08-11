import './App.css'
import React from 'react'
import { Router } from '@reach/router'
import Chat from './chatfolder/Chat'
import Origin from './Original'

import Logg from './personFolder/LogReg'

import Main from './productFolder/Main'
import Detail from './productFolder/Detail'
import Update from './productFolder/Update'

import MainActivity from './activityFolder/Main'
import DetailActivity from './activityFolder/Detail'
import UpdateActivity from './activityFolder/Update'

import LalaChat from './chatfolder/LalaChat'

function App() {
  const [name] = React.useState("AbdullahQasem")

  return (
    <div className="App">
      <Router>
        <Logg path="/login" />
        <Main path="/" />
        <Detail path="product/:id" />
        <Update path="product/:id/edit" />

        <MainActivity path="/activity" />
        <DetailActivity path="activity/:id" />
        <UpdateActivity path="activity/:id/edit" />

        <Chat path="/chat" />
        <LalaChat path="/lala" name={name} />
      </Router>

      <h3>XxX انتهى البيان XxX</h3>
      <Origin />
    </div>
  );
}

export default App;