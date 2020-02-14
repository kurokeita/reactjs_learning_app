import React, {useState} from 'react'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import RefForm from './RefForm'

function Notes(props) {
    const [notes, setNotes] = useState([
        {
            id: '0',
            title: 'test 0',
            content: 'This is note index 0'
        },
        {
            id: '1',
            title: 'test 1',
            content: 'This is another note'
        }        
    ])
    const [id, setId] = useState(1)

    function handleAddNote(e) {
        e.preventDefault()
        setNotes([
            ...notes,
            {
                id: id + 1,
                title: e.target.title.value,
                content: e.target.content.value
            }
        ])
        setId(id + 1)
    }

    return(
        <div>
            <Tab.Container>
                <Row>
                    <Col sm='4'>
                        <ListGroup>
                            {notes.map(n => <ListGroup.Item key={n.id} active action href={'#link_' + n.id}>{n.title}</ListGroup.Item>)}
                        </ListGroup>
                    </Col>
                    <Col sm='8'>
                        <Tab.Content>
                            {notes.map(n => <Tab.Pane key={n.id} eventKey={'#link_' + n.id}>{n.content}</Tab.Pane>)}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <Container fluid className='mt-5'>
                <Form onSubmit={handleAddNote}>
                    <RefForm name="title" buttonName="Title" style={{minWidth: '100px'}} variant='info'/>
                    <RefForm name="content" buttonName="Content" style={{minWidth: '100px'}} variant='info' />
                    <Button variant='success' type='submit' block>Add</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Notes