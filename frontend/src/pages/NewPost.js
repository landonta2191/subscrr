import React, { Component } from 'react'
import { FaImage} from 'react-icons/fa';
import { FaPaperPlane} from 'react-icons/fa';
const uuidv1 = require('uuid/v1');

export default class NewPost extends Component {
    submitForm = (e) => {
      e.preventDefault();
    //FUNCTION TO CREATE AN INSTANCE USER 
    // Only works when refresh the browser => will show on Firebase database
    // debugger;
      const idpath= uuidv1(); 
      const firebaseStoragePath = "images/users/" + this.props.app.auth().currentUser.uid + "/posts/" + idpath + ".jpg";
      this.props.app.database().ref('posts/' + this.props.app.auth().currentUser.uid + "/" + idpath).set({
        description: e.target.about.value,
        storagePath: firebaseStoragePath,
        id: idpath
      });
      
      //Upload Posts Pictures
      var storageRef = this.props.app.storage().ref();
      var profileRef = storageRef.child(firebaseStoragePath);
      profileRef.put(e.target.upload.files[0]).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
      });
  }
  render() {
    return (
      <div className="newpost">
        <form className="newpost__form">
            <h1>NEW POST </h1>
            <form onSubmit={this.submitForm} className="newpost__form--top">
                <input classname="about" id="about" type="textarea" name="about" placeholder="Write your post.."></input>
                <input classname="upload" id="upload" type="file" name="upload"></input>
                <button className="button"><FaPaperPlane/>POST</button>    
            </form>
        </form>
      </div>
    )
  }
}
