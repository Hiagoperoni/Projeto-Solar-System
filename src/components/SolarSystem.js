import React from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
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
