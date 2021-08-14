import React from 'react'
import Navbar from './Navbar'
import SimpleTabs from './SimpleTabs'

const Header = () => {
  const style = {
    position: 'sticky'  , /* Set the navbar to fixed position */
    top: '0', /* Position the navbar at the top of the page */
    width: '100%', /* Full width */
  };
  
  return (
    <div>
      <header style={style} >
        <Navbar />
        <SimpleTabs />
      </header>

    </div>
  )
}

export default Header
