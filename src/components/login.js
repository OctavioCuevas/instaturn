import React, { Component } from 'react';
import axios from 'axios';
//import { Link } from "react-router-dom";
import './login.css';

class Login extends Component {
  state = { 
    email: '',
    password: '',
  }

  getAcceso = async (e) => {
    e.preventDefault();
    const uri = `https://instaturnv1.herokuapp.com/api/v1/user/auth/${this.state.email},${this.state.password}`
    try {
      const response = await axios.get(uri);
      const verificar = response.data.tickets;
      console.log(verificar);
    
      if (verificar) {
        this.props.history.push('/Test/')
        //alert('Si pasa');
      }else {
        alert('No pasa');
      }
    } catch (error) {
      console.error(error);
    }
  }

  /*
    onClick={this.getAcceso(document.getElementById("inputEmail").value,document.getElementById("inputPassword").value
  */

  handleInput = (e) => {
    switch (e.target.id) {
      case 'email':
        this.setState({
          email: e.target.value
        })
        break;
      case 'password':
        this.setState({
          password: e.target.value
        })
        break;
      default:
        break;
    }
  }

  submit = (e) => {
    e.preventDefault();
    console.log(this.state);
    console.log("Aqui hariamos login....");
  }

  render() { 
        return (
          <div className="text-center">
            <h1>{this.state.password}</h1>
            <form className="form-signin">
              <img className="mb-4" src="https://www.blueindic.com/blog/wp-content/uploads/2017/04/ticket-01-300x283.png" alt="" width="72" height="72"></img>
              <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
              <label for="inputEmail" className="sr-only">Email address</label>
              <input
                onChange={this.handleInput}
                type="email" 
                id="email" 
                className="form-control" 
                placeholder="Email address" 
                required="" 
                autoFocus="">
              </input>
              <label for="inputPassword" className="sr-only">Password</label>
              <input
                onChange={this.handleInput}
                type="password"
                id="password" 
                className="form-control" 
                placeholder="Password" 
                required="">
              </input>
              <div className="checkbox mb-3">
                
                  <input type="checkbox" value="remember-me"></input>
                  <label className="ml-2" >Remember Me</label>
              </div>
              <button
                onClick={this.getAcceso}
                className="btn btn-lg btn-primary btn-block" 
                type="submit"> Sign in
              </button>
              
              <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
              <p className="mt-5 mb-3 text-muted">© 2017-2019</p>
            </form>
          </div>
        );
    }
};
 
export default Login;
