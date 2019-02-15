import React, { Component } from 'react'
import ScrollAnimation from 'react-animate-on-scroll';

export default class About extends Component {
  render() {
    return (
      <div className="about">
            <ScrollAnimation animateIn="fadeInUp" animateOnce= {true}>
        <h3>E-commerce Platform for Content with powerful sense of sophistication and refinement</h3>
            </ScrollAnimation>
      </div>
    )
  }
}
