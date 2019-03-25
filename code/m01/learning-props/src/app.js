'use strict'

import React, {Component} from 'react'

import Button from './button'
import Square from './square'
import LikeButton from './like-button'
import SearchButton from './search-button'
import SeartchButton from './search-button';


// Este e um component StateFull (Ele manipula estado)
class App extends Component{
    
    constructor() {
        super()
        this.state = {
            color: "green"
        }
    }

    render() {
        return (
            <div>
                <Square color={this.state.color} />
                {['red', 'green', 'blue'].map((color) => (
                    <Button
                     key={color}
                     handleClick={() => this.setState({color})}>
                     {color}
                    </Button>
                ))}
            </div>
        )
    }
}
export default App















// Ecs 5
// const App = React.createClass({
// 
//     render: function() {
//         return ( 
//         <div className='1'>
//             <Title name="Rhomennik" lastname={{a: 'Ri', b: 'os' }} / >
//         </div>
//         )
//     }
// })

