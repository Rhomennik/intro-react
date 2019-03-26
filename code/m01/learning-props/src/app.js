'use strict'

import React, {Component} from 'react'

import Button from './button'


class App extends Component {

    constructor() {
        super()
        this.state = {
            value: '2'
        }
    }

    render () {
        return (       
         <form>
             <select multiple value={['1', '3']} onChange={(e) => {
                 console.log(e.target.value)
                 this.setState({
                     value: e.target.value
                 })
             }}>
                 <option value='1' >Opcao 1</option>
                 <option value='2' >Opcao 2</option>
                 <option value='3' >Opcao 3</option>
             </select>
           
        </form>
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

