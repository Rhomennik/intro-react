'use strict'

import React from 'react'
import Apuestas from './apuestas'
import Apostado from './apostado'
const AppContent = ({
    apostado,
    bangu1,
    caxias2,
    partido
}) => (
    <div className='app-name'>
            <Apuestas  bangu1={bangu1} caxias2={caxias2}/>
           {!!apostado.length && <Apostado partido={partido}/>}
    </div>
)

export default AppContent