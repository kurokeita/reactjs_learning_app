import {types} from 'mobx-state-tree'

const Note = types
    .model({
        id: types.integer,
        title: types.string,
        content: types.string
    })

export default Note