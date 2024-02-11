import React, {useEffect, useState} from 'react'
import { Form, InputGroup, Card, Button } from 'react-bootstrap'
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router';

const ClassAdd = () => {
    const navigate = useNavigate();
    const cookie = new Cookies();  
    
    const [classLetters, setClassLetters] = useState("");
    const [classNumbers, setClassNumbers] = useState("");
    const [profName, setProfName]  = useState("");
    const [termYear, setTermYear] = useState("")
    const [termSeason, setTermSeason] = useState("");

    const handleClassAdd = async (e) => {
        e.preventDefault();
        await fetch("http://127.0.0.1:5000/addclass", {
            method: "POST", 
            headers: {
                "Content-type": "application/json"
            }, 
            body: JSON.stringify({
                "email": cookie.get("email"), 
                "class_code": (classLetters + " " + classNumbers).toLowerCase(),
                "prof": profName, 
                "term": termSeason[0] + " " + termYear.slice(-2), 
            })
        })        
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
                        <Form.Control type="text" value={profName} onChange={(e) => {setProfName(e.target.value)}}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Term / Semester  
                        </Form.Label>
                        <InputGroup>
                            <Form.Control type="text" value={termSeason} onChange={(e) => {setTermSeason(e.target.value)}}/>
                            <Form.Control type="text" value={termYear} onChange={(e) => {setTermYear(e.target.value)}} />
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Class Code
                        </Form.Label>
                        <InputGroup>
                            <Form.Control type="text" value={classLetters} onChange={(e) => {setClassLetters(e.target.value)}}/>
                            <Form.Control type="text" value={classNumbers} onChange={(e) => {setClassNumbers(e.target.value)}}/>
                        </InputGroup>
                    </Form.Group>
                    <Button type="submit" onClick={handleClassAdd}>Add New Class</Button>
                </Form>

            </Card.Body>
        </Card>
    )
}

export default ClassAdd