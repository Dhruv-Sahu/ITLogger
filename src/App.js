import React,{Fragment,useEffect} from 'react';
import SearchBar from '../src/components/layout/SearchBar';
import Logs from '../src/components/logs/Logs';
import './App.css';
import AddBtn from './components/layout/AddBtn';
import AddLogModel from './components/logs/AddLogModel';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux'
import store from './store'

import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import EditLogModel from './components/logs/EditLogModel';
import AddTechModel from './components/techs/AddTechModal';


const App = () => {
  useEffect(() =>{
    // Initialize material UI
    M.AutoInit();
  });
  return (
    <Provider>
    <Fragment><SearchBar/>
    <div className="container">
      <AddBtn />
      <AddLogModel />
      <EditLogModel />
      <AddTechModel />
      <TechListModal />
      <Logs/>
    </div>
    </Fragment>
    </Provider>
  );
}

export default App;
