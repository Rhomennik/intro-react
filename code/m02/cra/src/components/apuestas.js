'user strict'

import React, {PropTypes} from 'react'

const  Apuestas = ({userinfo}) => (
  <div className='user-info'>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">Pais</th>
      <th scope="col">Partido</th>
      <th scope="col">Equipo 1</th>
      <th scope="col">Equipo 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Brasil</th>
      <td>Bangu 1
      <td>Caxias 2</td> 
      </td>
    </tr>
  </tbody>
</table>
 </div>
)


export default Apuestas