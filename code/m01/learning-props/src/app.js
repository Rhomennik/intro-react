'use strict'

import React from 'react'


import Title from './title'

const App = React.createClass({
    render: function() {
        return ( 
        <div className='1'>
            <Title name='Rhomennik Firmino' / >
            <label htmlFor='input' data-label='Label'>Input</label>
            <input type="text" id='input' aria-hidden={true} />
        </div>
        )
    }
})


export default App