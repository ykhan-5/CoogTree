import React from 'react'
import {Navbar, Nav, Col, Row, Button} from 'react-bootstrap';
import Cookies from 'universal-cookie';


const CoogNav = () => {
  const cookie = new Cookies();
  const handleSignout = () => {
    cookie.remove('authed');
    window.location.reload();
  }
  return (
    <div className="navbr">
      <Navbar>
        <Navbar.Brand href="/">
          CoogTree
        </Navbar.Brand>
        <Nav className="justify-content-end">
            {
              !cookie.get('authed') ? (
                <Row>
                  <Col><Nav.Item><a href='http://localhost:3000/login'><Button>Login</Button></a></Nav.Item></Col>
                  <Col className="ml-auto"><Nav.Item><a href='http://localhost:3000/signup'><Button>Signup</Button></a></Nav.Item></Col>          
                </Row>
              ) : (
                <Row>
                  <Col><Nav.Item><a href='http://localhost:3000/newclass'><Button>Add Class</Button></a></Nav.Item></Col>
                  <Col className="ml-auto"><Nav.Item><a href='http://localhost:3000/getclassmates'><Button>Connect</Button></a></Nav.Item></Col>       
                  <Col className="ml-auto"><Nav.Item href="/"><Button onClick={handleSignout}>Signout</Button></Nav.Item></Col>
                </Row>
              )
            }
        </Nav>      
      </Navbar> 
    </div>
  );
};

export default CoogNav;
