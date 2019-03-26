'user strict'

import React, {PropTypes} from 'react'

const  UserInfo = ({userinfo}) => (
  <div className='user-info'>
    <img src={userinfo.photo} />
    <h1>
       <a href={`https://github.com/${userinfo.login}`}>{userinfo.username}</a>
       </h1>
    <lu className='respos-info'>
      <li>Repositorios: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
   </lu>
   <li>Ultimo vez: {userinfo.updated_at}</li>
   <li>Pais: {userinfo.location}</li>
 </div>
)

UserInfo.propTypes = {
  userinfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}


export default UserInfo