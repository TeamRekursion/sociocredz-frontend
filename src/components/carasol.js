import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {
        return (
            <div className="carasol">
                <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showThumbs={false}>
                    <div>
                        <img src={"https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png"} alt="3"/>
                    </div>
                    <div>
                        <img src={"https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png"} alt="3"/>
                    </div>
                    <div>
                        <img src={"https://www.gstatic.com/mobilesdk/160505_mobilesdk/discoverycards/2x/auth.png"} alt="3"/>
                    </div>
                </Carousel>
            </div>
            
        );
    }
};

export default DemoCarousel;