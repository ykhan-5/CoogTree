import React from 'react'
import {Navbar, Nav, Col, Row, Button} from 'react-bootstrap';

const CoogNav = () => {
  return (
    <div className='navb'> 
      <Navbar>
        <Navbar.Brand>CoogTree</Navbar.Brand>
        <Nav className="justify-content-end">
          <Row>
            <Col><Nav.Item><Button>Login</Button></Nav.Item></Col>
            <Col className="ml-auto"><Nav.Item><Button>Signup</Button></Nav.Item></Col>          
          </Row>
        </Nav>      
      </Navbar> 
    </div>
  )
}

export default CoogNav;
