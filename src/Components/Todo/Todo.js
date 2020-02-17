import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({id, text, checked, onChange}) => {
    return (
        <p><input type='checkbox' checked={checked} onChange={onChange}/>{id}: {text}</p>
    )
}

Todo.propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo