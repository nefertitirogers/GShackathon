import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Index from './index';
import './VolunteerProf.css';

class Volunteer extends Component {
constructor(props){
  super(props);
  this.state={
    name: 'Nefertiti'
  }
 }
render() {
    return (
    <div>
      <MuiThemeProvider>
      <div className="Home">
        <AppBar
           title="Home"
           showMenuIconButton = {false}/>


        <div className="userImage">
        <img src={require('./user.png')}/>
        <br/>
          Hello, {this.state.name}
        </div>
        </div>
      </MuiThemeProvider>
    </div>
    );

  }
}


export default Volunteer;
