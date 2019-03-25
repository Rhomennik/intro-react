'use strict'

import React from 'react'


import Title from './title'

const App = React.createClass({

    render: function() {
        return ( 
        <div className='1'>
            <Title name="Rhomennik" lastname={{a: 'Ri', b: 'os' }} / >
        </div>
        )
    }
})


export default App