'use strict'

import React, {Component} from 'react'


class App extends Component {

    constructor() {
        super()
        this.state = {
            checked: false,
            showContent: false
        }
    }

    render () {
        return (
       <div>
           <label>
            <input type='checkbox' checked={this.state.checked} 
                 onChange={(e) => {
                 this.setState({
                     checked: !this.state.checked
                    }, () => {
                        this.setState({
                            showContent: this.state.checked
                        })
                    })
                 }}/> Mostrar Conteudo


           </label>
           {this.state.showContent && <div> Olha eu aqui!</div>}
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

