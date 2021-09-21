import React from 'react';
import { Carousel } from 'react-bootstrap';


export default class Slider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <div className="slider-parent-div">
                    <Carousel>
                        <Carousel.Item className="item-img" interval={10000}>
                            <img
                                className=" img d-block w-100" 
                                src="n1.jpg"
                                alt="First slide"
                            />
                            
                        </Carousel.Item>
                        <Carousel.Item className="item-img" interval={500}>
                            <img
                                className=" img d-block w-100"
                                src="night.jpg"
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item className="item-img">
                            <img
                                className=" img d-block w-100"
                                src="pp.jpg"
                                alt="Third slide"
                            />
                           
                        </Carousel.Item>
                    </Carousel>
                </div>
            </>
        )
    }


}