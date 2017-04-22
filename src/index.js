import React from 'react';
import ReactDOM from 'react-dom';
import UserAccountForm from './UserAccountForm.js';
import Header from './Header.js'
import './main.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    // In production, you would need to get the initial state from
    // a database call or similar method and use the return value
    // to set the state (instead of the hard coded strings)
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
        <Header />
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
