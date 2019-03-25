'use strict'

import React, {Component} from 'react'

import Timer from './timer'


// Este e um component StateFull (Ele manipula estado)
class App extends Component{
    
    constructor() {
        console.log('🔴Constructor')
        super()
        this.state = {
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
                { this.state.showTimer && <Timer />}
                <button onClick={() => {
                    this.setState({showTimer: !this.state.showTimer})
                }}>Show / hide timer</button>
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

