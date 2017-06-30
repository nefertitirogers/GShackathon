import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import Login from './App';
import Main from './Main';
import Signup from './Signup';
import EventPage from './EventPage';


class Index extends Component {
  constructor() {
    super();
    this.state={
      page: 'Main'

    }
  }

  render() {
      switch(this.state.page){
        case  "Main" :
           return(<Main Login={this.onLogin} Signup={this.onSignup} />);
        case  "Login" :
              return(<Login onLoginSuccess={this.onLoginSuccess}/>);
        case "Signup":
              return(<Signup />);
        case "EventPage":
              return(<EventPage />);
      }
  }

  onLogin = () => {
       this.setState({page : "Login"});
  }

  onSignup = () => {
       this.setState({page : "Signup"});
  }

  onLoginSuccess = () => {
    this.setState({page: "EventPage"});
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
