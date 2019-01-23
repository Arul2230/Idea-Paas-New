import * as React from 'react';
import { Button, Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';

class NavBar extends React.Component<any, any>{
  public render() {
    return (
      <Navbar fluid={true}>
        <Navbar.Header>
          <Button>
            <Glyphicon glyph="align-justify" />
          </Button>
          <Navbar.Brand>
            <a href="#brand">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
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
      </Navbar>
    )
  };
}

export default NavBar;