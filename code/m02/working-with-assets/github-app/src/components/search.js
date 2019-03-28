'use strict'

import React, {PropTypes} from 'react'

const Search = ({ isDisabled, handleSearch }) => (
    <div className='search'>
        <input type='search' 
        placeholder='Digite o nome do usuario no Github'
        disabled={isDisabled}
        onKeyUp={handleSearch}
        
        />
    </div>
)

Search.propType = {
    handleSearch: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
}
export default Search