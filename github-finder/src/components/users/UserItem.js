import React from 'react';
import {Link} from'react-router-dom';

const UserItem = ({user: {id, login, avatar_url, html_url}}) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url} alt={'User'+id}
        className='round-img' style={{width: '60px'}}
      />
      <h3>{login}</h3>
      <Link className='btn btn-dark btn-sm my-1' to={`/user/${login}`}>More</Link>
    </div>
  )  
}

export default UserItem
