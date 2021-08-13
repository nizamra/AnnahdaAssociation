import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
"/../../images/1.jpg",
"/../../images/2.png",
"/../../images/4.jpg",
"/../../images/3.jpg",
];

const Slider = () => {
return (
    <div className="slide-container" style={{'overflow': 'hidden', padding:"100px"}}>
    <Slide>
        <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[0]})`, 'height':'750px',backgroundSize:"cover"}}>
        </div>
        </div>
        <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[1]})`,'height': '750px',backgroundSize:"cover"}}>
        </div>
        </div>
        <div className="each-slide">
        <div style={{'backgroundImage': `url(${slideImages[2]})`,'height': '750px',backgroundSize:"cover"}}>
        </div>
        </div>
    </Slide>
    </div>
    )
}
export default Slider;
