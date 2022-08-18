import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Header />
        </header>
        <section>
          <SolarSystem />
        </section>
        <section>
          <Missions />
        </section>
      </div>
    );
  }
}

export default App;
