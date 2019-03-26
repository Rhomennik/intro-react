'use strict'

import React, {Component} from 'react'

import Button from './button'


class App extends Component {
    render () {
        return (       
         <form 
            onSubmit={(e) => {
            e.preventDefault()
              console.log('event', e)}}
              onChange={(e) => {
                  console.log('name: ' , e.target.name)
                  console.log('value: ' , e.target.value)
              }}
              >

             <input type="name" name="name"/>
             <input type="email" name="email"/>
             <button type='submit'>Guardar</button>
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

