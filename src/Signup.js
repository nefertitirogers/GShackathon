import injectTapEventPlugin from 'react-tap-event-plugin';
import React, { Component } from 'react';
import logo from './logo.svg';
import './Signup.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';



class Signup extends Component {
constructor(props){
  super(props);
  this.state={
    value: 0
  };
}
handleChange = (event, index, value) => this.setState({value});

render() {
  let form = null;
  if (this.state.value === 1){
    form = (
      <div>
        <TextField
          type="text"
          hintText="Enter Charity Name"
          floatingLabelText="Charity Name"
          onChange = {(event,newValue) => this.setState({password:newValue})}
          />
        <br/>
        <TextField
          hintText="Enter Username"
          floatingLabelText="Username"
          onChange = {(event,newValue) => this.setState({username:newValue})}
          />
         <br/>
           <TextField
             type="password"
             hintText="Enter Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
          <div className="charityFoc">
           <List>
          <header>&nbsp;&nbsp;Charity Focus</header>
          <ListItem

            leftCheckbox={<Checkbox />}
            primaryText="Homeless"
          />
          <ListItem

            leftCheckbox={<Checkbox />}
            primaryText="Elderly"
          />
          <ListItem

            leftCheckbox={<Checkbox />}
            primaryText="Disabilities"
          />
        </List>
        </div>
        <br/>
           <RaisedButton label="Submit" primary={true} />
         </div>
    )
  } else if (this.state.value === 2){
    form = (
      <div>
        <TextField
          hintText="Enter Username"
          floatingLabelText="Username"
          onChange = {(event,newValue) => this.setState({username:newValue})}
          />
         <br/>
           <TextField
             type="password"
             hintText="Enter Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
          <div className="charityFoc">
           <List>
          <header>&nbsp;&nbsp;Interests</header>
          <ListItem

            leftCheckbox={<Checkbox />}
            primaryText="Homeless"
          />
          <ListItem

            leftCheckbox={<Checkbox />}
            primaryText="Elderly"
          />
          <ListItem

            leftCheckbox={<Checkbox />}
            primaryText="Disabilities"
          />
        </List>
        </div>
        <br/>
           <RaisedButton label="Submit" primary={true} onClick={(event) => this.handleClick(event)}/>
         </div>

    )
  }
    return (
      <div>
        <MuiThemeProvider>
          <div className="Signup">
          <AppBar
             title="Sign Up"
             showMenuIconButton = {false}
           />
        <br/>
        <DropDownMenu value={this.state.value} onChange={this.handleChange} openImmediately={true} className="dropMenu">
          <MenuItem value={1} primaryText="Charity" />
          <MenuItem value={2} primaryText="User" />
        </DropDownMenu>
        <br/>
        {form}
         </div>
         </MuiThemeProvider>
      </div>
    );
  }
}

export default Signup;
