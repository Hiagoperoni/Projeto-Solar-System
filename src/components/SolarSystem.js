import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planetas">
        <Title headline="Planetas" />
        {
          planets.map((planeta) => (<PlanetCard
            key={ planeta.name }
            planetName={ planeta.name }
            src={ planeta.image }
            alt={ planeta.name }
          />))
        }
      </div>
    );
  }
}

export default SolarSystem;
