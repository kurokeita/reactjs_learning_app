import React, { useState, useContext } from 'react'
import Text from './Text'
import { ThemeContext } from './ThemeContext'
import Button from 'react-bootstrap/Button'

// class Toggle extends React.Component {
//     static contextType = ThemeContext
//     constructor(props) {
//         super(props)
//         this.state = {
//             toggleState: false
//         }
//
//         this.handleClick = this.handleClick.bind(this)
//     }
//
//     handleClick = async () => {
//         this.setState({
//             toggleState: !this.state.toggleState
//         })
//
//     }
//
//     render() {
//         let button = <ThemeContext.Consumer>
//             {({theme, themeToggle}) => (
//                 <Button variant={theme.theme === 'dark' ? 'light' : 'secondary'} onClick={() => {
//                     this.handleClick().then(themeToggle())
//                 }}>
//                     {theme.theme === 'light' ? 'Light' : 'Dark'}
//                 </Button>
//             )}
//         </ThemeContext.Consumer>
//         return(
//             <div>
//                 <p>
//                     {button}
//                 </p>
//                 <Text toggle={this.state.toggleState} />
//             </div>
//         )
//     }
//
// }

function Toggle() {
    const [toggleState, setToggleState] = useState(false)
    const theme = useContext(ThemeContext)

    async function handleClick() {
        setToggleState(!toggleState)
    }

    const button = (
        <Button variant={theme.theme.theme === 'dark' ? 'light' : 'secondary'} onClick={() => {
            handleClick().then(theme.themeToggle())
        }}>
            {theme.theme.theme === 'light' ? 'Light' : 'Dark'}
        </Button>
    )

    return (
        <div>
            <p>{button}</p>
            <Text toggle={toggleState} />
        </div>
    )
}

export default Toggle
