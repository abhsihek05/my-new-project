import React from 'react';
import '../AllCss/NavBar.css';
import { Link } from 'react-router-dom';
import { BsList } from "react-icons/bs";
import { BiCart } from "react-icons/bi";


export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
               <div className="col-md-12 nav-parent-div">
               <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <Link class="nav-link" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/">About</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/">Services</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/ ">Contact</Link>
                    </li>
                </ul>
            <div className="container">
                <div className="row">
                    <div className="col-md-2 text-end text-dark">
                       <h2><BsList /></h2>
                    </div>
                    <div className="col-md-8 text-center aling-item-center ">
                       <h2 className="main-logo">hwllow</h2>
                       <div >

                       </div>
                    </div>
                    <div className="col-md-2 text-start">
                       <h2><BiCart /></h2>
                    </div>
                </div>
            </div>
               </div>
            </>
        )
    }


}