'use strict'

import React from 'react'

const App = () => (
   <div className='app'>
    <div className='search'>
        <input type='search' 
        placeholder='Digite o nome do usuario no Github'/>
    </div>
        <div className='user-info'></div>
        <img src='https://avatars2.githubusercontent.com/u/24496303?v=4' />
        <h1>
            <a href='https://github.com/Rhomennik'>Rhomennik Firmino</a>
            </h1>

        <lu className='respos-info'>
            <li>Repositorios: 28</li>
            <li>Seguidores: 6</li>
            <li>Seguindo: 1</li>
        </lu>

        <div className='actions'>
            <button>Ver Repositorios</button>
            <button>Ver Favoritos</button>
        </div>

        <div className='repos'>
            <h2>Repositorios:</h2>
            <li>
                <a href='#'>Nome do repositorios</a>
            </li>
        </div>
        
        <div className='starred'>
            <h2>Favoritos:</h2>
            <li>
                <a href='#'>Nome do repositorios</a>
                </li>
        </div>

   </div>
 )
export default App