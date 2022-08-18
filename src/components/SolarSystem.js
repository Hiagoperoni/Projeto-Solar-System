import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="planetas">
        <Title headline="Planetas" />
        {
          Planets.map(({ name, image } = Planets) => (<PlanetCard
            key={ name }
            planetName={ name }
            planetImage={ image }
            alt={ name }
          />))
        }
      </div>
    );
  }
}

export default SolarSystem;
