import {types} from 'mobx-state-tree'
import Todo from './Todo'
import Note from './Note'

const ModelStore = types
    .model({
        Todos: types.array(Todo),
        Notes: types.array(Note)
    })
    .actions(self => ({
        newTodo(title) {
            const [last] = self.Todos.slice(-1)
            let id = -1
            if (last !== undefined) {
                id = last.id
            }
            self.Todos.push({
                id: id + 1,
                title: title
            })
        },
        newNote(title, content) {
            const [last] = self.Notes.slice(-1)
            let id = -1
            if (last !== undefined) {
                id = last.id
            }
            self.Notes.push({
                id: id + 1,
                title: title,
                content: content
            })
        }
    }))

const Store = ModelStore.create({
    Todos: [],
    Notes: []
})

export default Store