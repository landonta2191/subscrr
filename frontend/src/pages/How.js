import React, { Component } from 'react'
import '../animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
export default class How extends Component {
  render() {
    return (
      <div className="how">
        <ScrollAnimation animateIn="fadeInLeftBig" animateOnce= {true}>
        </ScrollAnimation>       
      </div>
    )
  }
}
