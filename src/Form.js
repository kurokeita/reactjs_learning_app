import React from 'react'
import axios from 'axios'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            typing: '',
            textarea: '',
            select: '',
            selecting: 'kurokeita',
            change1: '',
            username: ''
        }

        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleChange1 = this.handleChange1.bind(this)
    }

    // componentDidMount() {
    //     axios.request({
    //         method: 'POST',
    //         url: 'http://kurokeita.ddns.net:38080/api/test',
    //         data: {
    //             username: this.state.username
    //         }
    //     }).then((res) => {
    //         console.log(res)
    //     })
    // }

    handleChangeInput(e) {
        this.setState({
            typing: e.target.value
        })
    }

    handleChangeSelect(e) {
        this.setState({
            selecting: e.target.value
        })
    }

    async handleSubmit(e) {
        e.preventDefault()
        await this.setState({
            name: e.target.name.value,
            textarea: e.target.textarea.value,
            select: e.target.select.value,
            username: e.target.name.value
        })
        axios.request({
            method: 'POST',
            url: 'http://kurokeita.ddns.net:38080/api/test',
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            data: {
                username: this.state.username
            }
        }).then(function (response) {
            console.log(response)
        })
    }

    handleOnChange(e) {
        let target = e.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        })
    }

    handleChange1(e) {
        this.setState({
            change1: e.target.value
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name: <input type="text" name="name" value={this.state.typing} onChange={this.handleChangeInput}/>
                </label>
                <p>Typing: {this.state.typing}</p>
                <p>Input: {this.state.name}</p>
                <textarea name="textarea"/>
                <pre><p>Textarea: <code>{this.state.textarea}</code></p></pre>
                <select name="select" value={this.state.selecting} onChange={this.handleChangeSelect}>
                    <option value="test">Test</option>
                    <option value="kurokeita">kurokeita</option>
                    <option value="admin">admin</option>
                    <option value="naru">naru</option>
                    <option value="wow">wow</option>
                </select>
                <p>Selected: <code>{this.state.select}</code></p>
                <input type="text" value="unable to edit" onChange={this.handleChange1}/>
                <input type="submit" value="Submit"/>
            </form>
        )
    }
}

export default Form
