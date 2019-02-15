import React, { Component } from 'react'
import { FaExpeditedssl, FaEllipsisH} from 'react-icons/fa';
import { FaEllipsisV} from 'react-icons/fa';
import '../animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

export default class LandingPage extends Component {
  render() {
    return (
      <div className="landingpage">
            <nav className="landingpage__nav">
                <div className="landingpage__nav--left">
                    <h1>SUBBSCR</h1>
                    <FaExpeditedssl/>
                </div>
                <div className="landingpage__nav--right">
                    <h2>ABOUT</h2>
                    <h2>CONTACT US</h2>
                    <h2>SIGN UP</h2>
                </div>
            </nav>
            <div className="landingpage__herotext2">
            </div>
            <div className="landingpage__herotext1">
                <ScrollAnimation animateIn="fadeInLeftBig" animateOnce= {true}>
                <h3>_____GET PAID__TO CREATE</h3>
                </ScrollAnimation>
                <div className="landingpage__herotext1--wrapper">
                    <h1 className="exclusive">Exclusive</h1>
                    <h1 className="access">Access</h1>
                </div>
            </div>
            <div className="landingpage__main">
                <div className="landingpage__main--right"></div>
            </div>
        
            <img src= "/Assets/2.png"/>
            {/* <img src= "http://bouncefitnessstudio.com/_content/slider/man.png"/> */}
      </div>
    )
  }
}
