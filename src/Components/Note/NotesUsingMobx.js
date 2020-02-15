import React from 'react'
import Tab from 'react-bootstrap/Tab'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import RefForm from '../InputFormRef/RefForm'
import Store from '../Models/Store'

function Notes(props) {

    function handleAddNote(e) {
        e.preventDefault()
        const title = e.target.title.value
        const content = e.target.content.value
        Store.newNote(title, content)
    }

    return(
        <div>
            <Tab.Container>
                <Row>
                    <Col sm='4'>
                        <ListGroup>
                            {Store.Notes.map(n => <ListGroup.Item key={n.id} active action href={'#link_' + n.id}>{n.title}</ListGroup.Item>)}
                        </ListGroup>
                    </Col>
                    <Col sm='8'>
                        <Tab.Content>
                            {Store.Notes.map(n => <Tab.Pane key={n.id} eventKey={'#link_' + n.id}>{n.content}</Tab.Pane>)}
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <Container fluid className='mt-5'>
                <Form onSubmit={handleAddNote}>
                    <RefForm type='label' name="title" labelName="Title" style={{minWidth: '100px'}} variant='info'/>
                    <RefForm type='label' name="content" labelName="Content" style={{minWidth: '100px'}} variant='info' />
                    <Button variant='success' type='submit' block>Add</Button>
                </Form>
            </Container>
        </div>
    )
}

export default Notes