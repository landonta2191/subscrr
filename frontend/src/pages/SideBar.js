import React, { Component } from 'react'
import {FaEdit, FaPlus} from 'react-icons/fa';
import {FaShoppingCart} from 'react-icons/fa';
import {FaEnvelope} from 'react-icons/fa';
import {FaUnlockAlt} from 'react-icons/fa';
import { Link } from "react-router-dom";

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__main">
            <div>
                <Link to="/editprofile" style= {{ textDecoration: 'none'}}>
                <FaEdit/>
                <p>Edit Profile</p>
                </Link> 
            </div>
            <div>
                <Link to="/newpost" style= {{ textDecoration: 'none'}}>
                    <FaPlus/>
                    <p>New Post</p>
                </Link>
            </div>
            <div>
                <Link to="/payments" style= {{ textDecoration: 'none'}}>
                    <FaShoppingCart/>
                <p>Payments</p>
                </Link>
            </div>
            <div>
                <Link to="/messages" style= {{ textDecoration: 'none'}}>
                    <FaEnvelope/>
                    <p>Messages</p>
                </Link>
            </div>
            <div>
                <Link to="/subcribed" style= {{ textDecoration: 'none'}}>
                    <FaUnlockAlt/>
                    <p>Subscribed</p>
                </Link>
            </div>    
        </div>
      </div>
    )
  }
}
