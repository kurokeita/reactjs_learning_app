import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../../Actions/Todo'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Container from 'react-bootstrap/Container'
import TodoList from './TodoList'

const AddTodo = ({dispatch}) => {
    let input

    function add() {
        dispatch(addTodo(input.value))
        input.value = ''
    }
    
    return(
        <Container fluid>
            <InputGroup className='mb-3'>
                <FormControl name='add_todo' ref={node => input = node}/>
                <InputGroup.Append>
                    <Button variant='primary' onClick={add}>Add</Button>
                </InputGroup.Append>
            </InputGroup>
            <TodoList />
        </Container>
    )
}

export default connect()(AddTodo)
