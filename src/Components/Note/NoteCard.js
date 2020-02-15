import React from 'react'
import Card from 'react-bootstrap/Card'
// import Notes from './Notes'
import NotesUsingMobx from './NotesUsingMobx'

function NoteCard(props) {
    return(
        <div>
            <Card className='mt-3' bg='primary' text='white' style={{width: '100%', minWidth: '700px'}}>
                <Card.Header>Notes</Card.Header>
                <Card.Body>
                    <NotesUsingMobx />
                </Card.Body>
            </Card>
        </div>
    )
}

export default NoteCard