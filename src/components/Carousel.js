import React, { Component } from 'react';
import img1 from '../components/images/girasoles.jpg'
import img2 from '../components/images/descarga.jpg'
import img3 from '../components/images/flores-bonitas.jpg'
export class Carousel extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item">
                            <img src={img1} className="d-block w-100" alt="imagen de girasoles"/>
                        </div>
                        <div class="carousel-item">
                            <img src={img2} class="d-block w-100" alt="imagen de descarga"/>
                        </div>
                        <div class="carousel-item active">
                            <img src={img3} class="d-block w-100" alt="flores-bonitas"/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Carousel;