import React from 'react'
import Tab from '@material-ui/core/Tab';
import { Link } from '@reach/router'
import './Tabs.css'
const SimpleTabs = () => {
  const style = {
      background: '#eba943',
  }



return (
  <div style={style}>
    <Link to="/" >
      <Tab label="الصفحة الرئيسية" style={{color:'black', fontSize:'20px', textDecoration: 'none', }}/>
    </Link>
    <Link to="/about" >
      <Tab label="عن الجمعية" style={{color:'black', fontSize:'20px'}}/>
    </Link>
    <Link to="/product" >
      <Tab label="المنتجات" style={{color:'black', fontSize:'20px'}}/>
    </Link>
    <Link to="/activity" >
      <Tab label="النشاطات" style={{color:'black', fontSize:'20px'}}/>
    </Link>

  </div>
)
}

export default SimpleTabs
