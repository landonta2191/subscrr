import React, { Component } from 'react'
import UserList from "./UserList"
import Posts from './Posts';
import { FaMapMarker} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {withRouter} from "react-router-dom";
import '../animate.css';
import ScrollAnimation from 'react-animate-on-scroll';

const uuidv1 = require('uuid/v1');
class UserProfile extends Component {
  state = {
    user: {
    },
    profileURl: "",
  }
  componentDidMount() {
    //Firebase Database
    //Reference to users database from firebase
    const id = this.props.id;
    console.log(this.props.props.match.params.username);  
    console.log(this.props.username);  
    // console.log(id);
    // console.log(this.props.allusers);
    const allusers= this.props.allusers;
  
    if (this.props.props.match.params.username == this.props.username) {
      const usersRef = this.props.app.database().ref('users/'+ this.props.app.auth().currentUser.uid);
      usersRef.on('value', (snapshot) => {
          console.log(snapshot.val());
          this.setState({
            user: snapshot.val()
          })
        })
        const storage = this.props.app.storage();
        const ProfileReference = storage.ref("images/users/" + this.props.app.auth().currentUser.uid + "/profilepic.jpg" )
        ProfileReference.getDownloadURL().then(url => {
          this.setState ({
            profileURl: url
          })
        });
    }
    else {
      const found= allusers.find((object) => {
        return object.username == this.props.props.match.params.username
      });
      console.log(found.user_id);   
      const usersRef = this.props.app.database().ref('users/'+ found.user_id);
      usersRef.on('value', (snapshot) => {
          console.log(snapshot.val());
          this.setState({
            user: snapshot.val()
          })
        })
        const storage = this.props.app.storage();
        const ProfileReference = storage.ref("images/users/" + found.user_id + "/profilepic.jpg" )
        ProfileReference.getDownloadURL().then(url => {
          this.setState ({
            profileURl: url
          })
        });
    };    
  }
  render() {
    const id = this.props.id;
    console.log(id);
      return (
      <div className="user_profile">
        <div className="user_profile--background"></div>
        <div className="user_profile--container">
            <img src= {this.state.profileURl}
                className="user_profile--image" alt="user-image">
            </img>
            <div className="user_profile--name">
                <h1>{this.state.user.first_name}</h1>
                <h4>{this.state.user.last_name}</h4>
            </div>
            {this.props.app.auth().currentUser.uid !== id && <Link to='/payments' className="subscribe">SUBSCRIBE {this.state.user.price} $</Link> }
            <div className = "description">
              <ScrollAnimation animateIn="fadeInUp" animateOnce= {true}>
              <h2>{this.state.user.career}</h2>
                  <p>{this.state.user.about}</p>
                  <h3><FaMapMarker/> {this.state.user.location}</h3>
              </ScrollAnimation>     
            </div>
        </div>
        <UserList userdata= {this.state.user}/>
        <Posts id={id} app={this.props.app}/>
      </div>
    )
  }
}

export default withRouter(UserProfile);