import React from 'react';

module.exports = class UserAccountForm extends React.Component {
  constructor (props) {
    super (props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUserSettings = this.updateUserSettings.bind(this);
    this.loaderFunction = this.loaderFunction.bind(this);

    this.state = {
        id: this.props.user.id,
        email: this.props.user.email,
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        jobTitle: this.props.user.jobTitle
      }
    }

    loaderFunction() {
      if (document.getElementById("submitButton").classList.contains('loaded')) {
        document.getElementById('loaded').style.cssText = 'display: none;';
        document.getElementById('loading').style.cssText = document.getElementById('loading').style.cssText + 'display: inline-block;';
      }
      else {
        document.getElementById('loading').style.cssText = 'display: none;';
        document.getElementById('loaded').style.cssText = document.getElementById('loaded').style.cssText + 'display: inline-block;';
      }
    }

    handleChange(event) {
      this.setState({[event.target.name]: event.target.value});
    }

    updateUserSettings(data) {
      // inspect requestbin at https://requestb.in/1fxx6401?inspect
      var xhr = new XMLHttpRequest();

      // In dev environment, need to use cors-anywhere as
      // requestbin does not allow CORS PUT requests

      xhr.open('PUT', 'https://cors-anywhere.herokuapp.com/requestb.in/1fxx6401');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
      xhr.onload = function() {
        if (xhr.status === 200) {
          var userInfo = xhr.responseText;
          document.getElementById('loaded').innerText = "Saved!";
          document.getElementById('loading').style.cssText = 'display: none;';
          document.getElementById('loaded').style.cssText = document.getElementById('loading').style.cssText + 'display: inline-block;';
        }
      };
      xhr.send(JSON.stringify({
        id: data.id,
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        jobTitle: data.jobTitle
      }));
    }

  handleSubmit(event) {
    document.getElementById('loaded').style.cssText = 'display: none;';
    document.getElementById('loading').style.cssText = document.getElementById('loading').style.cssText + 'display: inline-block;';
    this.updateUserSettings(this.state);
    event.preventDefault();
  }


  render() {
    return (
      <div className="userForm">
        <form onSubmit={this.handleSubmit}>
          ID<br />
          <input type="text" name="id" value={this.state.id} onChange={this.handleChange} disabled/><br />
          Email<br />
          <input type="text" name="email" defaultValue={this.state.email}  onChange={this.handleChange}/><br />
          First Name<br />
          <input type="text" name="firstName" defaultValue={this.state.firstName}  onChange={this.handleChange}/><br />
          Last Name<br />
          <input type="text" name="lastName" defaultValue={this.state.lastName}  onChange={this.handleChange}/><br />
          Job Title<br />
          <input type="text" name="jobTitle" defaultValue={this.state.jobTitle}  onChange={this.handleChange}/><br />
          <button id="submitButton" className="submitButton"><div className="loaded" id="loaded">Save</div><div className="loading" id="loading"></div></button>
        </form>
      </div>
    );
  }
}
