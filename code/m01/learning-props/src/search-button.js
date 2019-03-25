'use strict'

import React from 'react'
import Button from './button'
// Este e um component StateLassll (FUNCOES que nao tem this pq e funcao pura)
const SeartchButton = () => (

    <Button handleClick={() => console.log('Search')}>Search</Button>

)


export default SeartchButton