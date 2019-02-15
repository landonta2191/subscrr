import React, { Component } from 'react'
import '../animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


export default class Mockup extends Component {
  render() {
    return (
        <ScrollAnimation animateIn="fadeInUp" animateOnce= {true}>
            <div className="mockup">
            <ScrollAnimation animateIn="fadeInLeft" animateOnce= {true}>
                <img src="/Assets/4.png"></img>
            </ScrollAnimation>
            {/* <ScrollAnimation animateIn="fadeInRight" animateOnce= {true}>
                <img src="Assets/5.png"></img>
            </ScrollAnimation> */}

            </div>
        </ScrollAnimation>
    )
  }
}
