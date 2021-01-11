import React, { Fragment, useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLog from './components/logs/AddLog';
import EditLog from './components/logs/EditLog';

const App = () =>{  
  useEffect(() => {
    // Materialize js init
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLog />
        <EditLog />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;