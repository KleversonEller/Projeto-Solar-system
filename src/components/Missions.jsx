import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map((objeto, index) => (<MissionCard
          key={ index }
          name={ objeto.name }
          year={ objeto.year }
          country={ objeto.country }
          destination={ objeto.destination }
        />))}
      </div>
    );
  }
}

export default Missions;
