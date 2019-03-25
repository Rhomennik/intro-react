'use strict'

import React from 'react'

const Title = ({name, lastname}) => (

<h1>Ola {`${name} ${lastname.a}${lastname.b} !`}</h1>

) 

Title.defaultProps = {
    name: 'Desconhecido',
           lastname: {
               a: 'Vaz',
               b: 'io'                
           }
       }

// const Title = React.createClass({
// // Metodo default se nao tiver passado a props
// getDefaultProps: function() {
//         return {
//             name: 'Desconhecido',
//             lastname: {
//                 a: 'Vaz',
//                 b: 'io'                
//             }
//         }
//     },
// render: function() {
//     return(
//         <h1>Oi {this.props.name + ' ' + this.props.lastname.a + this.props.lastname.b} </h1>
//     )
// }
// })
// 
export default Title