import React, { Component } from 'react'

export class UserItem extends Component {
  state = {    
    id: 1,
    login: "mojombo",
    avatar_url: "https://avatars0.githubusercontent.com/u/1?v=4",
    html_url: "https://github.com/mojombo"
  };

  render() {
    const {id, login, avatar_url, html_url} = this.state;
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
}

export default UserItem
