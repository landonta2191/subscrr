import React, { Component } from 'react'
import { FaHeart} from 'react-icons/fa';
import {withRouter} from "react-router-dom";
import { FaComment} from 'react-icons/fa';
import '../animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
const uuidv1 = require('uuid/v1');
class SinglePost extends Component {
    state = {
        post: {},
        postURL: ""
      }
     
      componentDidMount() {
        const id = this.props.props.match.params.id;
        console.log(id);
        //GET POST
        const postsRef = this.props.app.database().ref('posts/' + this.props.app.auth().currentUser.uid + "/" + id);
        postsRef.on('value', (snapshot) => {
        console.log(snapshot.val());
        this.setState({
          post: snapshot.val()
        })
        });
        //GET PICTURE
        const storage = this.props.app.storage();
        const ProfileReference = storage.ref("images/users/" + this.props.app.auth().currentUser.uid + "/posts/" + id + ".jpg" )
        ProfileReference.getDownloadURL().then(url => {
            console.log(url);
          this.setState ({
            postURl: url
          })  
        })
      }     
  render() {
    return (
    <ScrollAnimation animateIn="fadeInDown" animateOnce= {true}>
   
      <div className="single__post">
        <div className="single__post--background"></div>
        <div className="single__post--container">
            <div className="content">
                <img src= {this.state.postURl}
                    className="user_profile--image" alt="user-image"></img>
                <div className="content--wrapper">
                    <p>{this.state.post.description}</p>
                    <div className ="content--top">
                        <div className="heart">
                            <FaHeart/>
                            <p>870</p>
                        </div> 
                        <div className="comments">
                            <FaComment/>
                            <p>5</p>
                        </div> 
                    </div>
                    <div className="content--input">
                        <form  className="form" id = "comment-form" action="" >
                            <input type="text" name="comment" placeholder="Add a comment"/>
                            <div className="button">
                                <button type="submit">PUBLISH</button>
                                <button className="cancel" type="reset">CANCEL</button>
                            </div>
                        </form>
                    </div>
                    <div className="content--bottom">
                        <div className="icon">
                            <img src="http://pbs.twimg.com/media/CEjNdEtWYAAsIjN.png"/>
                            <p>Sophie Schneider</p>
                        </div>
                        <p>It looks awesome!!</p>
                        <div className="heart">
                            <FaHeart/>
                            <p>250</p>
                        </div> 
                    </div>
                    <div className="content--bottom">
                        <div className="icon">
                            <img src="http://pbs.twimg.com/media/CEjNdEtWYAAsIjN.png"/>
                            <p>Sophie Schneider</p>
                        </div>
                        <p>It looks awesome!!</p>
                        <div className="heart">
                            <FaHeart/>
                            <p>250</p>
                        </div> 
                    </div>
                    </div>
                </div>
        </div> 
      </div>
    </ScrollAnimation>
    )
  }
}
export default withRouter(SinglePost);