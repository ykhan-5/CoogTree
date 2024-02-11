import React, {useEffect} from 'react'
import { Form, InputGroup, Card, Button } from 'react-bootstrap'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router';

const ClassAdd = () => {
    const navigate = useNavigate();
    const cookie = new Cookies();   

    const handleClassAdd = () => {
        
    }

    useEffect(() => {
        if (!cookie.get("authed")) {
            navigate("/login");
        }
    })

    return (
        <Card className='loginForm'>
            <Card.Body>
                <Form onSubmit={handleClassAdd}>
                    <h3>Add New Class</h3>
                    <Form.Group>
                        <Form.Label>
                            Professor Name
                        </Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Term / Semester  
                        </Form.Label>
                        <InputGroup>
                            <Form.Control type="text" />
                            <Form.Control type="text" />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Class Code
                        </Form.Label>
                        <InputGroup>
                            <Form.Control type="text" />
                            <Form.Control type="text" />
                        </InputGroup>
                    </Form.Group>
                    <Button type="submit" onClick={handleClassAdd}>Add New Class</Button>
                </Form>

            </Card.Body>
        </Card>
    )
}

export default ClassAdd