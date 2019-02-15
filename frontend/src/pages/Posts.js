import React, { Component } from 'react'
import FirebaseImage from './FirebaseImage';
import SinglePost from './SinglePost';
import {Link} from "react-router-dom"
import {withRouter} from "react-router-dom";
import '../animate.css';
import ScrollAnimation from 'react-animate-on-scroll';


export default class Posts extends Component {
  state = {
    user: {},
    posts: [],
  }
componentDidMount() {
    //Firebase Database
    //Reference to posts based on user database from firebase. Getting value of the snapshot
    if ( this.props.id == this.props.app.auth().currentUser.uid ) {
      const postsRef = this.props.app.database().ref('posts/' + this.props.app.auth().currentUser.uid).orderByChild('id');;
      postsRef.on('value', (snapshot) => {
          console.log(snapshot.val());
          this.setState({
            posts: snapshot.val()
          })
      });
      //Reference to users
      const usersRef = this.props.app.database().ref('users/'+ this.props.app.auth().currentUser.uid);
      usersRef.on('value', (snapshot) => {
          console.log(snapshot.val());
          this.setState({
            user: snapshot.val()
          })
      });
    }
    else {
      const postsRef = this.props.app.database().ref('posts/' + this.props.id).orderByChild('id');;
      postsRef.on('value', (snapshot) => {
          console.log(snapshot.val());
          this.setState({
            posts: snapshot.val()
          })
      });
      //Reference to users
      const usersRef = this.props.app.database().ref('users/'+ this.props.id);
      usersRef.on('value', (snapshot) => {
          console.log(snapshot.val());
          this.setState({
            user: snapshot.val()
          })
      });
    }  
  }
  renderImageList(arr) {
    const imagesList= arr.map((post) => {
      return <Link style={{ textDecoration: 'none', color:'black' }} to={`/users/${this.props.app.auth().currentUser.uid}/posts/${post.id}`}><FirebaseImage app={this.props.app}
                            firebasePath={post.storagePath}
            /></Link>
    });
    return imagesList
  }
  render() {
    let allposts = [];
    if (this.state.posts) {
      allposts= Object.values(this.state.posts);
    }
    console.log(this.state.user)

    return (
      <div className="list-content">
         <div className="list-content--info">
              {this.state.user.fans >= 0 &&
                  <div className="followers">
                     <h4>FANS {this.state.user.fans}</h4>
                  </div> 
              }
                <div className="posts">
                    <h4>POSTS {allposts.length}</h4>
                </div>
            </div>
        <div className="list-content--posts">
        {/* {this.props.app.auth().currentUser.uid == this.props.id && this.renderImageList(allposts)} */}
        {allposts.length > 0 ? this.renderImageList(allposts) : null}
        </div>
      </div>
    )
  }
}
