import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import styled from "styled-components";
import { Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Button = styled.button`
color: none;
font-size: 1em;
margin: 0.8em;
padding: 0.25em 0.8em;
border: 0px solid ;
border-radius: 0px;
margin-left:550px;
position:fixed:
`;

class Header extends Component {
  constructor() {

    super();
    this.state = {
      time: new Date()
    }
  }

  currentTime() {
    this.setState({
      time: new Date()
    })
  }
  componentDidMount() {
    setInterval(() => this.currentTime(), 1000);

  }
  render() {
    return (
      <>
        <Navbar bg="light">
          <div className="btn ">
            <NavLink to="/" style={{ color: "black" }}>
              <p className="btn1">Brand name</p>
            </NavLink>
          </div>
          <p style={{ marginLeft: "450px", alignContent: "center", justifyContent: "center" }}>{this.state.time.toLocaleTimeString()}</p>
          {/* <Button>
            <MenuIcon />
    Menu</Button> */}
          <Button variant="primary" activeKey="1"><MenuIcon />
            <NavDropdown title="Menu" menuAlign="left"
              id="dropdown-menu-align-left" className="flex-column left">
              <NavDropdown.Item>MOFA</NavDropdown.Item>
              <NavDropdown.Item></NavDropdown.Item>
              <NavDropdown.Item>About us</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >Sign In</NavDropdown.Item>
            </NavDropdown>
          </Button>

        </Navbar>
        <br />
      </>
    )
  }
}

export default Header
