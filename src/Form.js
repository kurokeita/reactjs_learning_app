import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import RefForm from "./RefForm";
import { ThemeContext } from './ThemeContext'
import { ButtonToolbar } from 'react-bootstrap'

function Form(props) {
    const [name, setName] = useState('')
    const [typing, setTyping] = useState('')
    const [textarea, setTextarea] = useState('')
    const [select, setSelect] = useState('')
    const [selecting, setSelecting] = useState('kurokeita')
    const theme = useContext(ThemeContext)

    function handleChangeInput(e) {
        setTyping(e.target.value)
    }

    function handleChangeSelect(e) {
        setSelecting(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setName(e.target.name.value)
        setTextarea(e.target.textarea.value)
        setSelect(e.target.select.value)
        axios.request({
            method: 'POST',
            url: 'http://reactjs.ddns.net:38081/api/test',
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            data: {
                username: e.target.name.value
            }
        }).then((response) => {
            // console.log(response.data.username)
            props.changeName(response.data.username)
        })
    }

    useEffect(() => {
        console.log(name)
        if (name) {
            document.title = name
        }
    }, [name])

    return (
        <form onSubmit={handleSubmit}>
            <RefForm name="name" buttonName="Name" value={typing} onChange={handleChangeInput} />
            <p>Typing: {typing}</p>
            <p>Input: {name}</p>
            <InputGroup className="mb-3" size="lg">
                <FormControl as="textarea" name="textarea" aria-label="Textarea 1" style={{ height: 200 }} />
            </InputGroup>
            <p>Textarea: <code>{textarea}</code></p>
            <InputGroup className="mb-3">
                <FormControl as="select" name="select" value={selecting} onChange={handleChangeSelect}>
                    <option value="test">Test</option>
                    <option value="kurokeita">kurokeita</option>
                    <option value="admin">admin</option>
                    <option value="naru">naru</option>
                    <option value="wow">wow</option>
                </FormControl>
            </InputGroup>
            <ButtonToolbar className='mb-3' style={{justifyContent: 'center'}}>
                <ButtonGroup aria-label="Basic example">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Middle</Button>
                    <Button variant="secondary">Right</Button>
                    <DropdownButton variant='danger' as={ButtonGroup} title="Dropdown" id="drop-down" drop='up' className='super-colors'>
                        <Dropdown.Item variant='success' eventKey="1">Dropdown link</Dropdown.Item>
                        <Dropdown.Item variant='dark' eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
            </ButtonToolbar>
            <ButtonToolbar className='mb-3' style={{justifyContent: 'center'}}>
                <ButtonGroup aria-label="Basic example" className='mr-2'>
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Middle</Button>
                    <Button variant="secondary">Right</Button>
                    <DropdownButton variant='danger' as={ButtonGroup} title="Dropdown" id="drop-right" drop='right' className='super-colors'>
                        <Dropdown.Item variant='success' eventKey="1">Dropdown link</Dropdown.Item>
                        <Dropdown.Item variant='dark' eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                </ButtonGroup>
                <Button variant="info">Info</Button>
            </ButtonToolbar>
            <div>Selected:
                <pre style={{ color: (theme.theme.theme === 'dark' ? '#e83e8c' : 'black') }}><code>{select}</code></pre>
            </div>
            <FormControl value="unable to edit" readOnly />
            <Button type="submit" variant="primary" className='mt-3'>Submit</Button>
        </form>
    )
}

export default Form
