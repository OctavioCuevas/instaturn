import React from 'react';
import { Link } from "react-router-dom";
import './login.css';


function login() {
  return (
    <body class="text-center">
    <form class="form-signin">
  <img class="mb-4" src="https://www.blueindic.com/blog/wp-content/uploads/2017/04/ticket-01-300x283.png" alt="" width="72" height="72"></img>
  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus=""></input>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" class="form-control" placeholder="Password" required=""></input>
  <div class="checkbox mb-3">
    
      <input type="checkbox" value="remember-me"></input>
      <label className="ml-2" >Remember Me</label>
  </div>
  <Link to="/Test/"><button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button></Link>
  <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
  <p class="mt-5 mb-3 text-muted">© 2017-2019</p>
</form>


</body>
  );
}

export default login;