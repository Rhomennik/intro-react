'use strict'

import React from 'react'
import Button from './button'
// Este e um component StateLassll (FUNCOES que nao tem this pq e funcao pura)
const LikeButton = () => (

    <Button handleClick={() => console.log('Curtiu')}>Curtir</Button>

)

export default LikeButton