import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import RefForm from "./RefForm";
import { ThemeContext } from './ThemeContext'

// class Form1 extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             name: '',
//             typing: '',
//             textarea: '',
//             select: '',
//             selecting: 'kurokeita',
//             change1: '',
//             username: ''
//         }
//
//         this.handleChangeInput = this.handleChangeInput.bind(this)
//         this.handleChangeSelect = this.handleChangeSelect.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//         this.handleOnChange = this.handleOnChange.bind(this)
//         this.handleChange1 = this.handleChange1.bind(this)
//     }
//
//     handleChangeInput(e) {
//         this.setState({
//             typing: e.target.value
//         })
//     }
//
//     handleChangeSelect(e) {
//         this.setState({
//             selecting: e.target.value
//         })
//     }
//
//     async handleSubmit(e) {
//         e.preventDefault()
//         await this.setState({
//             name: e.target.name.value,
//             textarea: e.target.textarea.value,
//             select: e.target.select.value,
//             username: e.target.name.value
//         })
//         axios.request({
//             method: 'POST',
//             url: 'http://reactjs.ddns.net:38081/api/test',
//             headers: {
//                 'Access-Control-Allow-Origin': '*',
//             },
//             data: {
//                 username: this.state.username
//             }
//         }).then((response) => {
//             console.log(response.data.username)
//             this.props.changeName(response.data.username)
//         })
//     }
//
//     handleOnChange(e) {
//         let target = e.target
//         let value = target.value
//         let name = target.name
//         this.setState({
//             [name]: value
//         })
//     }
//
//     handleChange1(e) {
//         this.setState({
//             change1: e.target.value
//         })
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log(prevState.typing)
//         if (this.state.name) {
//             document.title = this.state.name
//         }
//     }
//
//     render() {
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <RefForm name="name" buttonName="Name" value={this.state.typing} onChange={this.handleChangeInput}/>
//                 <p>Typing: {this.state.typing}</p>
//                 <p>Input: {this.state.name}</p>
//                 <InputGroup className="mb-3" size="lg">
//                     <FormControl as="textarea" name="textarea" aria-label="Textarea 1" style={{height:200}}/>
//                 </InputGroup>
//                 <p>Textarea: <code>{this.state.textarea}</code></p>
//                 <InputGroup className="mb-3">
//                     <FormControl as="select" name="select" value={this.state.selecting} onChange={this.handleChangeSelect}>
//                         <option value="test">Test</option>
//                         <option value="kurokeita">kurokeita</option>
//                         <option value="admin">admin</option>
//                         <option value="naru">naru</option>
//                         <option value="wow">wow</option>
//                     </FormControl>
//                 </InputGroup>
//                 <div>Selected: {(
//                     <ThemeContext.Consumer>
//                         {({theme}) => (
//                             <pre style={{color: (theme.theme === 'dark' ? '#e83e8c' : 'black')}}><code>{this.state.select}</code></pre>
//                         )}
//                     </ThemeContext.Consumer>
//                 )}</div>
//                 <input type="text" value="unable to edit" onChange={this.handleChange1}/>
//                 <input type="submit" value="Submit"/>
//             </form>
//         )
//     }
// }

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
            <div>Selected:
                <pre style={{ color: (theme.theme.theme === 'dark' ? '#e83e8c' : 'black') }}><code>{select}</code></pre>
            </div>
            <FormControl value="unable to edit" readOnly />
            <Button type="submit" variant="primary">Submit</Button>
        </form>
    )
}

export default Form
