'use strict'

import React, {Component} from 'react'

import Button from './button'
import LikeButton from './like-button'
import SearchButton from './search-button'
import SeartchButton from './search-button';

class App extends Component{
    render() {
        return (
            <div className='container'>
             <LikeButton />
             <SeartchButton />
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

