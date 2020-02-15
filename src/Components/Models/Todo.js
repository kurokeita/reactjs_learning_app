import {types} from 'mobx-state-tree'

const Todo = types
    .model({
        id: types.integer,
        title: '',
        state: false
    })
    .actions(self => ({
        setTitle(newTitle) {
            self.title = newTitle
        },
        toggle() {
            self.state = !self.state
        }
    }))

export default Todo