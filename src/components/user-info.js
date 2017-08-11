'use strict'

import React from 'react'

const UserInfo = () => (
  <div className='user__info'>
    <img src='https://avatars0.githubusercontent.com/u/6557202?v=4&s=460' alt='William Costa' />

    <h1 className='user__name'>
      <a href='https://github.com.br/williamcosta'>William Costa</a>
    </h1>

    <ul className='user__repositories'>
      <li>Repositório: 122</li>
      <li>Seguidores: 10</li>
      <li>Seguindo: 10</li>
    </ul>
  </div>
)

export default UserInfo
