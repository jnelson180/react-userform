import React from 'react';

module.exports = class UserAccountForm extends React.Component {
  constructor (props) {
    super (props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateUserSettings = this.updateUserSettings.bind(this);

    this.state = {
        id: this.props.user.id,
        email: this.props.user.email,
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        jobTitle: this.props.user.jobTitle
      }
    }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

    updateUserSettings(data) {
      // inspect requestbin at https://requestb.in/1fxx6401?inspect
      var xhr = new XMLHttpRequest();
      // used cors-anywhere because cannot send CORS request from localhost in
      // modern browsers. Would not use cors-anywhere in production.
      xhr.open('PUT', 'https://cors-anywhere.herokuapp.com/requestb.in/1fxx6401');
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest')
      xhr.onload = function() {
        if (xhr.status === 200) {
          var userInfo = xhr.responseText;
          console.log("Record updated!");
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
    console.log('A change was submitted for ' + this.state.firstName + " " + this.state.lastName + ".");
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

          <input type="submit" value="Save" className="submitButton" />
        </form>
      </div>
  );
}
}
