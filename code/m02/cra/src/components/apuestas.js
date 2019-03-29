'user strict'

import React, {PropTypes} from 'react'

const  Apuestas = ({userinfo, bangu1, caxias2}) => (
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
      <td><button onClick={bangu1}>2.00</button></td>
      <td><button onClick={caxias2}>1.60</button></td>
    </tr>
  </tbody>
</table>
 </div>
)


export default Apuestas