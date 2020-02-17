import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import {connect} from 'react-redux'
import { toggleTodo } from '../../Actions/Todo'

const TodoList = ({todos, toggleTodo}) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} checked={todo.completed === true ? 'checked' : ''} onChange={() => {
                toggleTodo(todo.id)
            }} />
        ))}
    </ul>
)

TodoList.propType = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired
        })
    )
}

const mapStateToProps = state => ({
    todos: state.todo,
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)