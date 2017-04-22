import React from 'react';
import ReactDOM from 'react-dom';
import UserAccountForm from './UserAccountForm.js';
import logo from './logo.png';
import './main.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        id: '2379532102',
        email: 'jnelson180@gmail.com',
        firstName: 'Jake',
        lastName: 'Nelson',
        jobTitle: 'Web Developer'
    }
  }
}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

        </div>
        <h3 className="control-panel-title">
          User Account Control Panel
        </h3>
        <UserAccountForm user={this.state.user}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
