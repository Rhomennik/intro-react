'use strict'

import React, {Component} from 'react'

import Square from './square'

class App extends Component{
    render() {
        return (
            <div className='1'>
            {['blue', 'red', 'green', 'pink', 'yellow'].map((square) => (
             <Square key={square} color={square} / >
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

