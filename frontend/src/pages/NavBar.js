import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { FaExpeditedssl} from 'react-icons/fa';
import { FaHome} from 'react-icons/fa';
import { FaPlus} from 'react-icons/fa';



export default class NavBar extends Component {
  state = {
    postURL: ""
  }
  componentDidMount() {
    const storage = this.props.app.storage();
    const ProfileReference = storage.ref("images/users/" + this.props.app.auth().currentUser.uid + "/profilepic.jpg" )
    ProfileReference.getDownloadURL().then(url => {
        console.log(url);
      this.setState ({
        postURL: url
      })  
    })
  }
  render() {
    console.log(this.state.postURL);
    return (
      <div className="navbar">
        <div className="navbar__logo">
              <Link to={"/"} style= {{ textDecoration: 'none', color:'black', display: 'flex', alignItems: 'center'}}>
                <h1>SUBBSCR</h1>
                <FaExpeditedssl/>
              </Link>
        </div>
        <form className="header__links header__links--right">
                <input className="search" placeholder="Search an influencer..." />
        </form>
        <Link to={"/newpost"} style= {{ textDecoration: 'none', color:'black' }}>
          <button className="newpost"><FaPlus/>CREATE A NEW POST</button>
        </Link>
        <img className="user" alt="username" src={this.state.postURL} ></img>
        {
          this.props.auth &&
          <button className={'button'} onClick={() => this.props.app.auth().signOut()}>SIGN OUT</button>
          }
        <Link to={"/"} style= {{ textDecoration: 'none', color:'black' }}>
            <FaHome/>
        </Link>    
      </div>
    )
  }
}


