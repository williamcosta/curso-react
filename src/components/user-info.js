'use strict'

import React, { PropTypes } from 'react'

const UserInfo = ({ userinfo }) => (
  <div className='user__info'>
    <img src={userinfo.avatar} alt='William Costa' />

    <h1 className='user__name'>
      <a href={`https://github.com.br/${userinfo.login}`}>
        {userinfo.username}
      </a>
    </h1>

    <ul className='user__repositories'>
      <li>Repositório: {userinfo.repos}</li>
      <li>Seguidores: {userinfo.followers}</li>
      <li>Seguindo: {userinfo.following}</li>
    </ul>
  </div>
)

UserInfo.propTypes = {
  userunfo: PropTypes.shape({
    username: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })
}

export default UserInfo
