const todo = (state = [], action) => {
    switch(action.type) {
        case 'add_todo':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'toggle_todo':
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
        default:
            return state
    }
}

export default todo