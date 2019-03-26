'use strict'
 
import React  from 'react'

// IMPORT COMPONENTS
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'


const AppContent = () => (
    <div className='app'>
    <Search />
    <UserInfo />
    <Actions />
    <Repos  className='repos' title='Repositórios: '
           repos={[{  name: 'Nome do repositorio', link: '#' }]} />
    <Repos className='starred' title='Favoritos: '
            repos={[{ ame: 'Nome do repositorio', link: '#' }]}
    />
    </div>
)

export default AppContent
