import React from 'react'

const UserItem = ({user: {id, login, avatar_url, html_url}}) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url} alt={'User'+id}
        className='round-img' style={{width: '60px'}}
      />
      <h3>{login}</h3>
      <a className='btn btn-dark btn-sm my-1' href={html_url}>More</a>
    </div>
  )  
}

export default UserItem
