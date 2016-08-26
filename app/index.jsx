import React from 'react';
import ReactDOM from 'react-dom';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import Navbar from 'react-bootstrap/lib/Navbar';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

const navbarInstance = (
  <Navbar inverse>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#">React-Bootstrap</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="#">Link</NavItem>
        <NavItem eventKey={2} href="#">Link</NavItem>
        <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
          <MenuItem eventKey={3.1}>Action</MenuItem>
          <MenuItem eventKey={3.2}>Another action</MenuItem>
          <MenuItem eventKey={3.3}>Something else here</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={3.3}>Separated link</MenuItem>
        </NavDropdown>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1} href="#">Link Right</NavItem>
        <NavItem eventKey={2} href="#">Link Right</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

const jumbotronInstance = (
  <Jumbotron>
    <h1>Hello, world!</h1>
    <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <p><Button bsStyle="primary">Learn more</Button></p>
  </Jumbotron>
);

const buttonsInstance = (
  <ButtonToolbar>
    {/* Standard button */}
    <Button>Default</Button>
    {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
    <Button bsStyle="primary">Primary</Button>
    {/* Indicates a successful or positive action */}
    <Button bsStyle="success">Success</Button>
    {/* Contextual button for informational alert messages */}
    <Button bsStyle="info">Info</Button>
    {/* Indicates caution should be taken with this action */}
    <Button bsStyle="warning">Warning</Button>
    {/* Indicates a dangerous or potentially negative action */}
    <Button bsStyle="danger">Danger</Button>
    {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
    <Button bsStyle="link">Link</Button>
  </ButtonToolbar>
);

ReactDOM.render(
  <div>
    <div id="navBar"></div>
    <div className="container">
      <div id="jumboTron"></div>
      <div id="buttonToolbar"></div>
    </div>
  </div>,
  document.getElementById('app')
);

ReactDOM.render(
  navbarInstance,
  document.getElementById('navBar')
);

ReactDOM.render(
  jumbotronInstance,
  document.getElementById('jumboTron')
);

ReactDOM.render(
  buttonsInstance,
  document.getElementById('buttonToolbar')
);
