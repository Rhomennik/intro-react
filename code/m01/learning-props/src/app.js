'use strict'

import React, {Component} from 'react'

import Timer from './timer'


// Este e um component StateFull (Ele manipula estado)
class App extends Component{
    
    constructor() {
        console.log('🔴Constructor')
        super()
        this.state = {
            time: 0,
            showTimer: true
        }
    }


    componentWillMount() {
        console.log('🔴componentWillMount')
    }

    componentDidMount() {
        console.log('🔴componentDidMount')
    }


    render() {
        console.log('🔴Render')
        return (
            <div>
                <Timer time={this.state.time} />
                <button onClick={() => {
                    this.setState({time: this.state.time + 10})
                }}>Change Props</button>
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

