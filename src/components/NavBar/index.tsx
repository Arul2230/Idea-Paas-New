import * as React from 'react';
import { Navbar } from 'react-bootstrap';
import './NavBar.css';
class NavBar extends React.Component<any, any>{
  public render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">React-Bootstrap</a>
          </Navbar.Brand>
        </Navbar.Header>
      </Navbar>
    )
  };
}

export default NavBar;
