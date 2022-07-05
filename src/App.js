import React from 'react';
import './App.css';
import NewsList from './components/news list/NewsList';
import SidePanel from './components/Panel/SidePanel'
import ContextProvider from './context/Context';


function App() {
  return (
    <ContextProvider>
    <div className="App">
      <SidePanel />
      <NewsList />
    </div>
    </ContextProvider>
  );
}

export default App;
