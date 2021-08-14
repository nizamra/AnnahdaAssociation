import React, { useContext } from 'react'
import Tab from '@material-ui/core/Tab';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';
import {Link, navigate} from '@reach/router'
import './Tabs.css'
import { Button } from '@material-ui/core';
const SimpleTabs = () => {
  const style = {
    background: '#eba943',
  }

  const { setUser, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const logout = () => {
    AuthService.logout().then(res => {
      setUser({ name: "", role: "" });
      setIsAuthenticated(false);
      navigate("/")
    })
  }

  return (
    <div style={style}>
      {
        isAuthenticated ?
          <>
            <Link to="/adminmain" >
              <Tab label="المنتجات" style={{ color: 'black', fontSize: '20px', textDecoration: 'none', }} />
            </Link>
            <Link to="/adminnews" >
              <Tab label="الأخبار" style={{ color: 'black', fontSize: '20px' }} />
            </Link>
            <Link to="/adminorders" >
              <Tab label="الطلبات" style={{ color: 'black', fontSize: '20px' }} />
            </Link>
            <Button onClick={logout} color="inherit">تسجيل الخروج</Button>
          </>
          :
          <>
            <Link to="/" >
              <Tab label="الصفحة الرئيسية" style={{ color: 'black', fontSize: '20px', textDecoration: 'none', }} />
            </Link>
            <Link to="/about" >
              <Tab label="عن الجمعية" style={{ color: 'black', fontSize: '20px' }} />
            </Link>
            <Link to="/product" >
              <Tab label="المنتجات" style={{ color: 'black', fontSize: '20px' }} />
            </Link>
            <Link to="/activity" >
              <Tab label="الأخبار" style={{ color: 'black', fontSize: '20px' }} />
            </Link>
          </>
      }
    </div>
  )
}

export default SimpleTabs
