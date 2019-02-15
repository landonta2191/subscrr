import React, { Component } from 'react'
const uuidv1 = require('uuid/v1');



export default class EditProfile extends Component {
    
    submitForm = (e) => {
         e.preventDefault();
         alert("it works");
    //FUNCTION TO CREATE AN INSTANCE USER 
    // Only works when refresh the browser => will show on Firebase database
    // debugger;
    this.props.app.database().ref('users/' + this.props.app.auth().currentUser.uid).set({
        user_id: this.props.app.auth().currentUser.uid,
        username: e.target.username.value,
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        career: e.target.career.value,
        about: e.target.about.value,
        price: e.target.price.value,
        location: e.target.location.value,  
        email: e.target.email.value,
        fans: 0,
      });

      //UPLOAD PROFILE PIC TO FIREBASE 
      var storageRef = this.props.app.storage().ref();
      var profileRef = storageRef.child("images/users/" + this.props.app.auth().currentUser.uid + "/profilepic.jpg");
      profileRef.put(e.target.upload.files[0]).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
      });
    }

  render() {
    return (
      <div className="editprofile">
        <form onSubmit={this.submitForm} className="editprofile__form">
            <div className="editprofile__form--left">
                <label for="username">Username</label>
                    <input type="text" name="username" placeholder="Choose an username" required></input>
                <label for="first-name">First Name</label>
                    <input type="text" name="first_name" placeholder="Your first name" required></input>
                <label for="first-name">Last Name</label>
                    <input type="text" name="last_name" placeholder="Your last name" required></input>
                <label for="about">About</label>
                    <input type="textarea" name="about" placeholder="Write something about yourself"></input>
            </div>
            <div className="editprofile__form--right">
                <label for="career">Career</label>
                    <input type="text" name="career" placeholder="what do you do?" required></input>
                <label for="price">Set Your Subcription Price</label>
                    <input type="number" step='0.01' placeholder='0.00' name="price" required></input>
                <label for="location">Location</label>
                    <input type="text" name="location" placeholder="Where do you live?" required></input>
                <label for="email">Email</label>
                    <input type="email" name="email" placeholder="Your Email Address" required></input>
                <label for="upload">Upload Profile Picture</label>
                    <input type="file" name="upload"></input>
            </div>
            <button className="save-changes">Save Changes</button>
        </form>
      </div>
    )
  }
}
