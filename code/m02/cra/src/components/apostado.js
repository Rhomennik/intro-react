'use strict'

import React from 'react'

const Apostado = ({partido}) => (
    <div className='apostado'>
    
    <h3>Apuesta</h3>
    <div>
                No hay apuestas seleccionadas.
         </div>
        <ul>
            {partido.map((part, index) => (
                <li key={index}> <a>{part.nombre}</a></li>
            ))}

        </ul>
    </div>
)

export default Apostado;