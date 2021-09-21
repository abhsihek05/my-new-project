import React from 'react';
import '../AllCss/Product.css';



export default class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = { none: "d-none", block: "d-block" };
    }

    imgClick = () => {
        this.setState({ none: "d-block" })
    }

    render() {
        return (
            <>
                <div className="hover-div">
                <div className=" poduct-parent-div container d-flex justify-content-center">
                    <img src="./sound.webp" className="w-50 product-image" onClick={this.imgClick} />
                </div>
                <div className={`container text-start product-details non`}>
                    <div className="content">
                        <h3 className="">About Items</h3>
                        <h6 className="text-danger">price : <span className="">2999</span></h6>
                        <ul className="text-dark">
                            <li>LED Display, Supports USB pen drive and SD/MMC card. Subwoofer drive size 11cm (4.3), Satellite drive size 7cm (2.75)</li>
                            <li>Built-in FM Blue LED Power indicator, Fully functional remote control, FM frequency scan range: 87 - 108MHz</li>
                            <li>Output power (RMS):20W + 10W x 4, Frequency response:20Hz - 20KHz; FM frequency scan range: 87 - 108MHz; FM storage memory: 40 channels</li>
                            <li>Impedance Subwoofer drive :4 Ohms Satellite drive : 4 Ohms. Subwoofer dimension : 150 x 260 x 273 mm (W x D x H). Satellite dimension : 95 x 150 x 93 mm (W x D x H)</li>
                            <li>Sensitivity : 500mV, S/N Ratio : ≥ 72dB, Separation : ≥ 45dB, Subwoofer drive size</li>
                            <li>Packer Detail: SAME AS MANUFACTURER
                                Importer Details: ZEBRONICS INDIA PRIVATE LIMITED,Address: No.118,Poonamallee High road, Chennai - 600084, India</li>
                        </ul>
                    </div>
                </div>
                </div>


            </>
        )
    }


}