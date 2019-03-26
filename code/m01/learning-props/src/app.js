'use strict'

import React, {Component} from 'react'

import Button from './button'


class App extends Component {

    constructor () {
        super()
        this.state = {
            value: 'Valor Inicial'
        }
    }
    render () {
        return (
    <div>
        <form>
            <input type="text" value={this.state.value} onChange={(e) => {
                console.log(e.target.value)
                this.setState({
                    value: e.target.value
                })
            }} /> 
        </form>
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

