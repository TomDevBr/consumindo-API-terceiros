
import { Header } from './components/Header';
import { SearchField } from './components/SearchField';
import React from 'react'
import './style/App.scss';
import  CrudClients  from './components/CrudClients';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="search">
        <SearchField />
      </div>

      <CrudClients/>
    </div>
  );
}

export default App;
