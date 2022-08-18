import React from 'react';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <p>Missões</p>
      </div>
    );
  }
}

export default Missions;
