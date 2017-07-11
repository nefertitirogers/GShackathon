import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';
import './Signup.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Index from './index';



class Signup extends Component {
constructor(props){
  super(props);
  this.state={
    email: '',
    name: '',
    password: '',
    userType: null,
  };
}


render() {
  return(
    <div>
      <MuiThemeProvider>
        <div className="Signup">
        <AppBar
           title="Sign Up"
           showMenuIconButton = {false}
         />
         <TextField
           floatingLabelText="Email"
           onChange = {(event,value) => this.setState({username:value})}
           />
           <br/>
           <TextField
             floatingLabelText="Username"
             onChange = {(event,value) => this.setState({name:value})}
             />
         <br/>
           <TextField
             type="password"
             floatingLabelText="Password"
             onChange = {(event,value) => this.setState({password:value})}
             />
          <br/>
          <SelectField
          className="userCate"
          userType={this.state.userType}
          floatingLabelText="Select user type"
          floatingLabelFixed={true}
          onChange = {(event,index, value) => this.setState({userType:value})}
          >
          <MenuItem userType={null} primaryText="" />
         <MenuItem userType={'charity'} primaryText="Charity" />
         <MenuItem userType={'volunteer'} primaryText="Volunteer" />
       </SelectField>

       <br/>
       <RaisedButton label="Submit" primary={true} onTouchTap={this.onSignUp.bind(this)}/>
      </div>
      </MuiThemeProvider>
  </div>
    );

  }
  onSignUp() {
      this.props.onSignUpSuccess();
  }

}

export default Signup;
