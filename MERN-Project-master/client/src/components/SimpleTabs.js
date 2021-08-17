import React, { useContext } from 'react'
import Tab from '@material-ui/core/Tab';
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';
import { navigate } from '@reach/router'
import './Tabs.css'
import Button from '@material-ui/core/Button';

const SimpleTabs = () => {
  const style = {
    background: '#d54037',
    paddingBottom: '10px'
  }
  const style2 = {
    marginRight: '20px' ,
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
            <Button variant="contained" color="default" style={style2} onClick={e =>{navigate('/adminmain')}}>
              <Tab label="المنتجات" style={{ color: 'black', fontSize: '20px', textDecoration: 'none', }} />
              </Button>
              <Button variant="contained" color="default" style={style2} onClick={e =>{navigate('/adminnews')}}>
              <Tab label="الأخبار" style={{ color: 'black', fontSize: '20px', textDecoration: 'none', }} />
              </Button>
              <Button variant="contained" color="default" style={style2} onClick={e =>{navigate('/adminorders')}}>
              <Tab label="الطلبات" style={{ color: 'black', fontSize: '20px', textDecoration: 'none', }} />
              </Button>
              <Button variant="contained" color="default" style={style2} onClick={logout}>
              <Tab label="تسجيل الخروج" style={{ color: 'black', fontSize: '20px', textDecoration: 'none', }} />
              </Button>
          </>
          :
          <>
              <Button variant="contained" color="default" style={style2} onClick={e =>{navigate('/')}}>
              <Tab label="الصفحة الرئيسية" style={{ color: 'black', fontSize: '20px', textDecoration: 'none', }} />
              </Button>
              <Button variant="contained" color="default" style={style2} onClick={e =>{navigate('/about')}}>
              <Tab label="عن الجمعية" style={{ color: 'black', fontSize: '20px', textDecoration: 'none', }} />
              </Button>
              <Button variant="contained" color="default" style={style2} onClick={e =>{navigate('/product')}}>
              <Tab label="المنتجات" style={{ color: 'black', fontSize: '20px', textDecoration: 'none', }} />
              </Button>
              <Button variant="contained" color="default" style={style2} onClick={e =>{navigate('/news')}}>
              <Tab label="الأخبار" style={{ color: 'black', fontSize: '20px', textDecoration: 'none', }} />
              </Button>
          </>
      }
    </div>
  )
}

export default SimpleTabs
