import React from 'react';
import react from  'react';
import { Navbar } from 'react-bootstrap';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Product from './Components/Procuct';
import Slider from './Components/Slider';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <>
                <NavBar />
                <Slider />
                <Product />
                <Footer />
            </>
        )
    }

    
}