import React, {Component} from 'react';
import './Login.css'; 
import CRM from '../images/CRM.png';
import {Button, Form, FormGroup, Label, input, Login} from 'react-bootstrap';
class Login extends Component {
  render() {
    return(
      <form className="login-form">
        <h1  className="textcontainer">ss 
        </h1>    
        <div class="imgcontainer" ><img src ={CRM} width="350" height="300" alt="Cinque Terre"/>
        </div>

        <FormGroup>
        <label for="username"><span class="glyphicon glyphicon-user"></span> Email or username: </label>

        <input type="email" placeholder="enter email of username"></input> 
        <lable>Password:</lable>
        <input type="password" placeholder="Password"></input>
        </FormGroup>

        <button type="submit" class ="button">Login</button>
        <button type="submit" class ="cancelbtn">Cancel</button>

      </form>
    ); 
    
  }
}
export default Login;