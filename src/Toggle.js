import React from 'react'
import Text from './Text'
import {ThemeContext} from './ThemeContext'
import Button from 'react-bootstrap/Button'

class Toggle extends React.Component {
    static contextType = ThemeContext
    constructor(props) {
        super(props)
        this.state = {
            toggleState: false
        }
        
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = async () => {
        this.setState({
            toggleState: !this.state.toggleState
        })
        
    }

    render() {
        // let button = <button className={this.context.theme.button} onClick={this.handleClick}>{this.state.toggleState ? 'ON' : 'OFF'}</button>
        let button = <ThemeContext.Consumer>
            {({theme, themeToggle}) => (
                <Button variant={theme.button === 'Button-light' ? 'light' : 'secondary'} onClick={() => {
                    this.handleClick().then(themeToggle())
                }}>
                    {theme.theme === 'light' ? 'ON' : 'OFF'}
                </Button>
            )}
        </ThemeContext.Consumer>
        return(
            <div>
                <p>
                    {button}
                </p>
                <Text toggle={this.state.toggleState} />
            </div>
        )
    }

}

export default Toggle
