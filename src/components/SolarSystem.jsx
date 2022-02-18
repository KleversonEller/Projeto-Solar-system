import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {planets.map((objeto) => (<PlanetCard
          key={ objeto.name }
          planetName={ objeto.name }
          planetImage={ objeto.image }
        />))}
      </div>
    );
  }
}

export default SolarSystem;
