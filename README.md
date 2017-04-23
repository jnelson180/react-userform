# React User Form

### [Live Demo](https://jnelson180.github.io/react-userform/)

## *Installation*

###### Clone the package or download the ZIP file at https://github.com/jnelson180/react-userform.git, then run ` npm start` in the `react-userform-master` directory.

- The user form component itself is located at src/UserAccountForm.js.
- It is rendered through index.js, which imports UserAccountForm and Header components.
- Compiled with the standard create-react-app scripts, using babel 'react' and 'es2015'.



## *Use*
###### Just edit the default values provided in the form inputs and hit "Save".
###### Note that the "Id" field is not editable as this should (probably) remain static. To make it non-static, remove the `disabled` attribute from this input element line: `<input type="text" name="id" value={this.state.id} onChange={this.handleChange} disabled/>` (~line 61: UserAccountForm.js).



##### The requestbin for this project is available at:
##### https://requestb.in/1fxx6401?inspect
