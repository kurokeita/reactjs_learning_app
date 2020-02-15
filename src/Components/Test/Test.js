import React from 'react'
import Store from '../Models/Store'

function Test() {
    Store.new('test')
    Store.new('test 2')
    return(
        <div>
            {Store.Todos.map(n => <p>{n.id}: {n.title}</p>)}
        </div>
    )
}

export default Test