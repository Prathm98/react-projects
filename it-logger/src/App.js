import React, { Fragment, useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js'
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLog from './components/logs/AddLog';
import EditLog from './components/logs/EditLog';
import TechModal from './components/techs/TechModal';
import AddTech from './components/techs/AddTech';
import store from './store';
import { Provider } from 'react-redux';

const App = () =>{  
  useEffect(() => {
    // Materialize js init
    M.AutoInit();
  });

  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <div className="row">
            <AddBtn />
            <AddLog />
            <EditLog />        
            <AddTech />            
            <div className="col s8"><Logs /></div>
            <div className="col s4"><TechModal /></div>
          </div>
        </div>
      </Fragment>
    </Provider>
  );
}

export default App;
