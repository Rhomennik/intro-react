'use strict'
import React from 'react'
// Este e um component StateLassll (ex: FUNCOES que nao tem this pq e funcao pura)
const Square = ({ color }) => (
    <div style={{
        backgroundColor: color,
        height: '100px',
        width: '100px'
    }}/>
)

Square.defaultProps = {
    color: 'red'
}

export default Square