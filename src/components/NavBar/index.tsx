import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class NavBar extends React.Component<any, any>{
  public render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
      </NavItem>
            <NavItem eventKey={2} href="#">
              Link
      </NavItem>
          </Nav>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link Right
      </NavItem>
            <NavItem eventKey={2} href="#">
              Link Right
      </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  };
}

export default NavBar;