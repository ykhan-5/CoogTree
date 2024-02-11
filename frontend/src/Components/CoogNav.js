import React from "react";
import { Navbar, Nav, Col, Row, Button } from "react-bootstrap";
import Cookies from "universal-cookie";

const CoogNav = () => {
  const cookie = new Cookies();
  return (
    <div className="navb">
      <Navbar>
        <Navbar.Brand href="/">CoogTree</Navbar.Brand>
        <div className="nav-item-right">
          <Nav className="justify-content-end">
            {!cookie.get("authed") ? (
              <Row>
                <Col>
                  <Nav.Item>
                    <a href="http://localhost:3000/login">
                      <Button>Login</Button>
                    </a>
                  </Nav.Item>
                </Col>
                <Col className="ml-auto">
                  <Nav.Item>
                    <a href="http://localhost:3000/signup">
                      <Button>Signup</Button>
                    </a>
                  </Nav.Item>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col>
                  <Nav.Item>
                    <a href="http://localhost:3000/newclass">
                      <Button>Add Class</Button>
                    </a>
                  </Nav.Item>
                </Col>
                <Col className="ml-auto">
                  <Nav.Item>
                    <a href="http://localhost:3000/getclassmates">
                      <Button>Connect</Button>
                    </a>
                  </Nav.Item>
                </Col>
              </Row>
            )}
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default CoogNav;
