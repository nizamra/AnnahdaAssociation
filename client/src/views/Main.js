import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import one from  "../1.jpg"
import two from  "../2.jpg"
import three from  "../3.jpg"
import four from  "../4.jpg"
const slideImages = [
    one,
    two,
    three,
    four,
];

const Main = () => {
    return (
            <div className="slide-container" style={{ 'overflow': 'hidden', padding: "100px" }}>
            <Slide>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[0]})`, 'height': '750px', backgroundSize: "cover" }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[1]})`, 'height': '750px', backgroundSize: "cover" }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[2]})`, 'height': '750px', backgroundSize: "cover" }}>
                    </div>
                </div>
                <div className="each-slide">
                    <div style={{ 'backgroundImage': `url(${slideImages[3]})`, 'height': '750px', backgroundSize: "cover" }}>
                    </div>
                </div>

            </Slide>
        </div>
    )
}
export default Main;
