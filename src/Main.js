import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';
import './Main.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import Index from './index';
injectTapEventPlugin();

class Main extends Component {
constructor(props){
  super(props);
  this.state={
  }
 }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div className="Login"
          >
          <AppBar
             title="Welcome to Just Serve"
             showMenuIconButton = {false}
           />
           <div
           className="doveImage">
           <img src={require('./mainPic.jpg')}
            />
            <br/>
            <RaisedButton label="Login" primary={true} className='loginBtn' onTouchTap={this.Login.bind(this)}/>
             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

            <RaisedButton label="Sign Up" primary={true} className='signupBtn' onTouchTap={this.Signup.bind(this)}/>
            </div>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
  Login() {
    this.props.Login();
  }

  Signup() {
      this.props.Signup();
  }
}

export default Main;
