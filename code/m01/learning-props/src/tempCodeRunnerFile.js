'use strict'

import React, {Component} from 'react'

import Square from './square'

class App extends Component{
    render() {
        return (
            <div className='1'>
            {['blue', 'red', 'green', 'pink', 'yellow'].map((square, index) => (
             <Square key={index} color={square} / >
            ))}
            </div>
        )
    }
}
export default App


