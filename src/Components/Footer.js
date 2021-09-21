import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import '../AllCss/Footer.css';


export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <div className="Footer-parent-div bg-dark text-light container-fluid p-4">
                    <div className="row">
                        <div className="col-6 text-center ">
                            <h3>About</h3>
                            <p className="p-0 m-0"></p>

                            <ol>
                                <ol>
                                    This is Site for eloctronics and it deals on the products
                                </ol>
                                <ol>
                                    It locate in Noida sector 2
                                </ol>
                            </ol>
                        </div>
                        <div className="col-md-6">
                            <h3 className>
                                Contacts
                            </h3>
                            <ol>
                                <ol>
                                    Blogs
                                </ol>
                                <ol>
                                    Tel : 96XXXXXX
                                </ol>
                                <ol>
                                    Facebook
                                </ol>
                                <ol>
                                    Twiter
                                </ol>
                                <ol>
                                    Instagram
                                </ol>
                            </ol>
                        </div>
                    </div>
                </div>

              <div className="button-div">
                    <button className="btn btn-secondary">Suscribe Here</button>
              </div>
            </>
        )
    }


}