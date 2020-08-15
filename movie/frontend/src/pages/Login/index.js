import React from "react";
import Joi from "@hapi/joi";
import _ from "lodash";
import Input from "../../components/common/Input";
import { connect } from "react-redux";
import { signIn } from "../../actions/authAction";
import Button from "../../components/common/Button";
import "./style.css";

class Login extends React.Component {
  state = {
    data: {
      email: "",
      password: "",
    },
    errors: {},
    chkEmail:localStorage.getItem('chkemail') || '',           //for local Storage
    chkLoggedIn: localStorage.getItem('chkloggedIn') || false,        //for local storage
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);

    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  };

  validateProperty = (input) => {
    const { name, value } = input;
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  validate = () => {
    const options = { abortEarly: false };
    const result = Joi.validate(this.state.data, this.schema, options);
    if (!result.error) return null;

    const errors = {};
    result.error.details.forEach(
      (element) => (errors[element.path[0]] = element.message)
    );
    return errors;
  };
  handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    const errors = this.validate();
    if (_.isEmpty(errors)) this.props.signIn(this.state.data);
  };

  saveUserDetais(userData){
    // console.log(userData);
  //   this.props
    // this.setState({
    //     chkEmail:userData.email,
    //     chkLoggedIn: true
    // });
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('email',userData.email);
  }

  checkLogout(){
    // this.setState({
    //   chkLoggedIn: false,
    // });
    // localStorage.setItem('loggedIn', false);
    // localStorage.setItem('email', '');
  }


  render() {
    const { data, errors } = this.state;
    const { email, password } = data;
    const { authMessage, loggedIn,userData} = this.props;
    if (loggedIn) this.props.history.push("/movies");
    console.log(loggedIn);
    return (
      <div className="background-container pt-5">
        <div className="container">
          <h1 className="header">Login</h1>
          <form onSubmit={this.handleSubmit} onClick={this.saveUserDetais(userData)}>
            <Input
              name="email"
              label="Email"
              type="email"
              error={errors["email"]}
              iconClass="fas fa-envelope"
              onChange={this.handleChange}
              placeholder="Please enter your email..."
              value={email}
              autoFocus
            />
            <Input
              name="password"
              type="password"
              label="Password"
              error={errors["password"]}
              iconClass="fas fa-key"
              onChange={this.handleChange}
              placeholder="Please enter your password..."
              value={password}
            />
            {authMessage && <p className="text-white">{authMessage}</p>}
            <Button disabled={this.validate()} type="submit" label="Login" />
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn,
    authMessage: state.auth.authMessage,
    userData: state.auth.userData,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


