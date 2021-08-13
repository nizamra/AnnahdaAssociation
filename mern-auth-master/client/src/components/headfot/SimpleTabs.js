import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Main from '../../productFolder/Main';
import About from '../../views/About';
import Product from '../../views/ProductsList';
import Activity from '../../views/Activity';
import './Navbar.css'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className='MuiAppBarcolorPrimary'>
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className='MuiAppBarcolorPrimary'>
          <Tab label="الصفحة الرئيسية" {...a11yProps(0)} />
          <Tab label="عن الجمعية" {...a11yProps(1)} />
          <Tab label="المنتجات" {...a11yProps(2)} />
          <Tab label="النشاطات" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Main />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <About />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Product />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Activity />
      </TabPanel>
    </div>
  );
}

{/* <Link to="/" className={classes2.root}>
          <Tab label="الصفحة الرئيسية" />
        </Link>
        <Link to="/about" className={classes2.root}>
          <Tab label="عن الجمعية" />
        </Link>
        <Link to="/product" className={classes2.root}>
          <Tab label="المنتجات" />
        </Link>
        <Link to="/activity" className={classes2.root}>
          <Tab label="النشاطات" />
        </Link> */}
