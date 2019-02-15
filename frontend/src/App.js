import React, { Component } from 'react';
import './App.css';
import './animate.css';
import ScrollAnimation from 'react-animate-on-scroll';
import UserProfile from './pages/UserProfile';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Posts from './pages/Posts';
import SinglePost from './pages/SinglePost';
import NavBar from "./pages/NavBar"
import NewPost from "./pages/NewPost";
import EditProfile from "./pages/EditProfile"
import SideBar from './pages/SideBar';
import LandingPage from "./pages/LandingPage";
import How from "./pages/How";
import Mockup from './pages/Mockup';
import Payment from './pages/Payment';
import LP1 from './pages/LP1';
import About from './pages/About';
import Technology from './pages/Technology';
import Price from './pages/Price';
import SignUp from './pages/SignUp';

//FIREBASE
import firebase from "firebase";
import firebaseApp from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'; // import for side-effects only https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#Import_a_module_for_its_side_effects_only
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'; // auth component
import './App.css';
import './firebaseui-styling.global.css';
//API
import {config} from "./config"
//CONNECTING TO FIREBASE
firebase.initializeApp(config);
var database = firebase.database();
//FIREBASE ADMIN

class App extends Component {
  //FIREBASE
  // set config properties for dropin auth component
  uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false,
    },
  };
  // Initialize state
  state = {
    isSignedIn: undefined,
    user: undefined,
    userinfo: {
      username: "",
      id: ""
    },
    allusers: {},
    id: ''
  };

  // on mount, register an `observer` that gets fired whenever the authentication state changes
  // the result of registration is an `unregister` function that should be stored and then called
  // when the component unmounts
  componentDidMount() {
    //AUTH
    this.unregisterAuthObserver = firebaseApp.auth().onAuthStateChanged((user) => {
      this.setState({
        user,
        isSignedIn: user != null
      });
      const allusers = firebaseApp.database().ref('users');
      allusers.on('value', (snapshot) => {
          console.log(snapshot.val());
          this.setState({
            allusers: snapshot.val()
          })
      });

      const usersRef = firebaseApp.database().ref('users/'+ firebaseApp.auth().currentUser.uid);
      usersRef.on('value', (snapshot) => {
          console.log(snapshot.val());
          this.setState({
            userinfo: snapshot.val()
          })
        })
    });
  }

  // Before unmounting, be sure to unregister the observer that was registered on mount
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    const allusers= Object.values(this.state.allusers);
    console.log('ALLUSERS',allusers);
    console.log(this.state.userinfo.username);
    return (
      <div className="App">   
          {this.state.isSignedIn !== undefined && !this.state.isSignedIn &&
            <div>
              <LandingPage/>
              <About/>
              <How/> 
              <Price/>                    
              <Mockup/>
              {/* <Technology/> */}
              <ScrollAnimation animateIn="fadeInUp" animateOnce= {true}>
                <StyledFirebaseAuth className={'firebaseUi'} uiConfig={this.uiConfig}
                                    firebaseAuth={firebaseApp.auth()}/>
               </ScrollAnimation>
              {/* //  <Router>
              //    <Switch>
              //       <Route path="/signup" exact component={SignUp}/>
              //    </Switch>
              //  </Router>       */}
            </div>
          }
          {this.state.isSignedIn &&
          //RENDERING THE ROUTER WHEN SIGNED IN
            <Router database={firebaseApp.database()} user={firebaseApp.auth().currentUser}>
              <div>
              <NavBar app={firebaseApp} auth={this.state.isSignedIn}/>
              <SideBar/>
                <Switch>
                  {/* {this.state.user == undefined && <Redirect from='/' to="/editprofile"/>} */}
                  <Route path='/' exact render = {() => <Redirect to={`/user/${this.state.userinfo.username}`} />} />          
                  {/* <Redirect from='/' exact to={`/user/${this.state.userinfo.username}`} /> */}
                  <Route path={"/user/:username"} render={ (props) => { return <UserProfile props={props} username={this.state.userinfo.username} id= {this.state.userinfo.user_id} allusers={allusers} app={firebaseApp}/> } }/>
                  <Route path='/posts' render={ () => { return <Posts app={firebaseApp}/> }}/> 
                  <Route path={`/users/${firebaseApp.auth().currentUser.uid}/posts/:id`} render={ (props) => { return <SinglePost props={props} app={firebaseApp}/> } }/> 
                  <Route path='/editprofile' render={ () => { return <EditProfile app={firebaseApp}/> } }/>     
                  <Route path='/newpost' render={ () => { return <NewPost app={firebaseApp}/> } }/>     
                  <Route path='/payments' render={ () => { return <Payment app={firebaseApp}/> } }/>     
                  {/* <Route path='/user/:userid/posts/:postid' render={ (props) => { return <SinglePost id={props.match.params.id} {...this.state} /> } }/>  */}
                </Switch>
              </div>
            </Router>      
          }   
      </div>
    );
  }
}
  export default App;


