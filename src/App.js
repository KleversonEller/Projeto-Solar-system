import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <SolarSystem />
        <Missions />
        <footer>2022 - Project Solar System - Kleverson Eller</footer>
      </div>
    );
  }
}

export default App;
