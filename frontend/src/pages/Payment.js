import React, { Component } from 'react'
import { FaArrowCircleRight} from 'react-icons/fa';

export default class Payment extends Component {
  render() {
    return (
      <div className="payment">
        <div className="payment__wrapper">
            <div className="payment__wrapper--date">
                <h3>October</h3>    
                <h3>November</h3>
                <h3>December</h3>
                <FaArrowCircleRight/>
            </div>
            <div className="payment__wrapper--users">
                <div className="users">
                   <img className="user__image" src="Assets/cami.jpg"></img> 
                   <h5>Nicholle Ingle</h5>
                </div>
                <h5>9.99$</h5>    
            </div>
            <div className="payment__wrapper--users">
                <div className="users">
                   <img className="user__image" src="Assets/cami.jpg"></img> 
                   <h5>Nicholle Ingle</h5>
                </div>
                <h5>9.99$</h5>    
            </div>
            <div className="payment__wrapper--users">
                <div className="users">
                   <img className="user__image" src="Assets/cami.jpg"></img> 
                   <h5>Nicholle Ingle</h5>
                </div>
                <h5>9.99$</h5>    
            </div>
            <div className="payment__wrapper--users">
                <div className="users">
                   <img className="user__image" src="Assets/cami.jpg"></img> 
                   <h5>Nicholle Ingle</h5>
                </div>
                <h5>9.99$</h5>    
            </div>
            <div className="payment__wrapper--users">
                <div className="users">
                   <img className="user__image" src="Assets/cami.jpg"></img> 
                   <h5>Nicholle Ingle</h5>
                </div>
                <h5>9.99$</h5>    
            </div>
            <div className="payment__wrapper--users">
                <div className="users">
                   <img className="user__image" src="Assets/cami.jpg"></img> 
                   <h5>Nicholle Ingle</h5>
                </div>
                <h5>9.99$</h5>    
            </div>
            <div className="payment__wrapper--users">
                <div className="users">
                   <img className="user__image" src="Assets/cami.jpg"></img> 
                   <h5>Nicholle Ingle</h5>
                </div>
                <h5>9.99$</h5>    
            </div>
            <h4>Total: 500$</h4>
            
        </div>
      </div>
    )
  }
}
