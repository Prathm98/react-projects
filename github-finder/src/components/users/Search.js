import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () =>{
  const [text, setText] = useState('');
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    if(text.trim().length > 0){
      githubContext.searchUsers(text);
      setText('');
      alertContext.setAlert(null, null);
    }else{      
      alertContext.setAlert('light', 'Please Enter Some Value');
    }    
  }
  
  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input type='text' name='text' value={text} 
          onChange={onChange} placeholder="Search Users..." />
        <input type='submit' name='search' value='Search' className='btn btn-dark btn-block' />
      </form>
      {githubContext.users.length > 0 && <input type='button' name='clear' value='Clear' 
        className='btn btn-light btn-block' onClick={githubContext.clearUsers} />}
    </div>
  )  
}

export default Search
