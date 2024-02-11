import React, {useState} from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import '../css/bootstrap.min.css';

const LoginPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const handleLogin = async (e) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    })
  }

  return (
    <div> 
      <Card className='loginForm'>
        <Card.Body>
            <Form onSubmit={handleLogin}>
                <h3 style={{"text-align": "center"}}>Login</h3>
                <div className='loginFormForm'>
                  <Form.Group>
                      <Form.Label>
                          Username:
                      </Form.Label> 
                      <Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
                  </Form.Group>
                  <Form.Group>
                      <Form.Label>
                          Password:
                      </Form.Label>
                      <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                  </Form.Group>
                </div>
                <div className="loginFormForm">
                    <Button type="submit">Login</Button>
                    <p> No account?
                      <a href="http://localhost:3000/signup"> signup here...</a>
                  </p>
                </div>
            </Form>

          </Card.Body>
      </Card>
    </div>
  )
}

export default LoginPage