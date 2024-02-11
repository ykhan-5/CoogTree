import React from 'react'
import {Navbar, Nav, Col, Row, Button} from 'react-bootstrap';

const CoogNav = () => {
  return (
    <div className='navb'> 
      <Navbar>
        <Navbar.Brand>CoogTree</Navbar.Brand>
        <Nav className="justify-content-end">
          <Row>
            <Col><Nav.Item><a href='http://localhost:3000/login'><Button>Login</Button></a></Nav.Item></Col>
            <Col className="ml-auto"><Nav.Item><a href='http://localhost:3000/signup'><Button>Signup</Button></a></Nav.Item></Col>          
          </Row>
        </Nav>      
      </Navbar> 
    </div>
  )
}

export default CoogNav;
