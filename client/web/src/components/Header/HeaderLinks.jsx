import React, { Component } from "react";
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";
import SignIn from "../../index.js";
import ReactDOM from "react-dom";

class HeaderLinks extends Component {
  constructor(props, context) {
    super(props, context);  
    this.goToSignIn = this.goToSignIn.bind(this);  
    this.state = {
      value: 'signin'
    };
}

goToSignIn(e) {
    this.setState({ value: 'app' });
    ReactDOM.render(
      <SignIn/>,
      document.getElementById("root")
    );
}
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">2</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <div>
        <Nav>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-dashboard" />
            <p className="hidden-lg hidden-md">Dashboard</p>
          </NavItem>
          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown">
            <MenuItem eventKey={2.1}>You have 1 New Job Opening</MenuItem>
            <MenuItem eventKey={2.2}>Verizon hiring process updates</MenuItem>
            
          </NavDropdown>
          <NavItem eventKey={3} href="#">
            <i className="fa fa-search" />
            <p className="hidden-lg hidden-md">Search</p>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            Account
          </NavItem>
          <NavDropdown
            eventKey={2}
            title="Verizon Updates"
            id="basic-nav-dropdown-right">
            <MenuItem eventKey={2.1}>About</MenuItem>
            <MenuItem eventKey={2.4}>Feedback</MenuItem>
            <MenuItem eventKey={2.5}>FAQs</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={2.5}>Chat</MenuItem>
          </NavDropdown>
         </Nav> 
        <Nav pullRight>          
          <NavItem eventKey={3} href="#" onClick={this.goToSignIn}>
            Sign out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default HeaderLinks;
