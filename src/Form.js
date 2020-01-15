import React from 'react'

class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            typing: '',
            textarea: '',
            select: '',
            selecting: 'kurokeita'
        }

        this.handleChangeInput = this.handleChangeInput.bind(this)
        this.handleChangeSelect = this.handleChangeSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }

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

    handleSubmit(e) {
        this.setState({
            name: e.target.name.value,
            textarea: e.target.textarea.value,
            select: e.target.select.value,
        })
        e.preventDefault()
    }

    handleOnChange(e) {
        let target = e.target
        let value = target.value
        let name = target.name
        this.setState({
            [name]: value
        })
    }

    render() {
        console.log(this.state.textarea)
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:    
                    <input type="text" name="name" value={this.state.typing} onChange={this.handleChangeInput}></input>
                </label>
                <p>Typing: {this.state.typing}</p>
                <p>Input: {this.state.name}</p>
                <textarea name="textarea"></textarea>
                <pre><p>Textarea: <code>{this.state.textarea}</code></p></pre>
                <select name="select" value={this.state.selecting} onChange={this.handleChangeSelect}>
                    <option value="test">Test</option>
                    <option value="kurokeita">kurokeita</option>
                    <option value="admin">admin</option>
                    <option value="naru">naru</option>
                    <option value="wow">wow</option>
                </select>
                <p>Selected: <code>{this.state.select}</code></p>
                <input type="submit" value="Submit"></input>
            </form>
        )
    }
}

export default Form
