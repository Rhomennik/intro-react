'use strict'

import React, {Component} from 'react'

import Button from './button'


class App extends Component {

    constructor () {
        super()
        this.state = {
            value: 'Valor Inicial',
            checked: false,
            checked2: false
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
            <label>
                <input type='checkbox' value='Legal' checked={this.state.checked} onChange={(e) => {
                    console.log(e.target.checked)
                    this.setState({
                        checked: !this.state.checked
                    })
                }}/>
                Checkbox
            </label>
                
            <label>
                <input type='checkbox' value='Legal' defaultChecked />
                Checkbox
            </label>
                radio
            <input type='radio' name='rd' value='1' /> Radio 1
            <input type='radio' name='rd' value='2' /> Radio 2
        </form>
    </div>
                // Target: Meu input
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

