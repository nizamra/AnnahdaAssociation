import React from 'react'
import './Footer.css'
import Tab from '@material-ui/core/Tab';
import { Link } from '@reach/router'
import FacebookIcon from '@material-ui/icons/Facebook';
import logo from '../nahda.png'
import { auto } from 'async';

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">
                <div className="footer-left" style= {{textAlign :'center'}}>

                    <p className="footer-links">

                        <Link to="/" >
                            <Tab label="الصفحة الرئيسية" style= {{fontSize:'20px'}}/>
                        </Link>
                        <Link to="/about" >
                            <Tab label="عن الجمعية" style= {{fontSize:'20px'}}/>
                        </Link>
                        <Link to="/product" >
                            <Tab label="المنتجات" style= {{fontSize:'20px'}}/>
                        </Link>
                        <Link to="/activity" >
                            <Tab label="النشاطات" style= {{fontSize:'20px'}}/>
                        </Link>
                    </p>
                </div>

                <div className="footer-center" style= {{textAlign :'center', marginTop: '20px'}}>

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p>رام الله شارع يافا ص.ب 1108</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> تلفون : 009722966063</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p> فاكس : 009722966064</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="annahdac@palnet.com">annahdac@palnet.com</a></p>
                    </div>

                </div>
                <div className="footer-right" style= {{textAlign :'center'}}>

                    <div className="footer-icons">
                        <a href="https://www.facebook.com/Nahda-Women-Association-%D8%AC%D9%85%D8%B9%D9%8A%D8%A9-%D8%A7%D9%84%D9%86%D9%87%D8%B6%D8%A9-%D8%A7%D9%84%D9%86%D8%B3%D8%A7%D8%A6%D9%8A%D8%A9-247602765346943"><FacebookIcon /></a>
                    </div>


                </div>
                <footer style= {{textAlign :'center'}}>
                    <Link to="/">
                        <img src={logo} alt="شعار" style={{ width: '50px' }} />
                    </Link>
                    <p className="footer-company-name" style= {{fontSize:'18px'}}> جمعية النهضة النسائية © 2021</p>

                    </footer>

            </footer>
        </div>
    )
}

export default Footer
