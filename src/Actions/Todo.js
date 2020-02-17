const ADD_TODO = 'add_todo'
const TOGGLE_TODO = 'toggle_todo'
let lastID = 0

export function addTodo(text) {
    return {
        type: ADD_TODO,
        id: lastID++,
        text: text
    }
}

export function toggleTodo(id) {
    return {
        type: TOGGLE_TODO,
        id: id
    }
}