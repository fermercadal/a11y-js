import React from 'react'
import Movie from '../Movie/Movie';

class Trilogy extends React.Component {
  render() {
    return (
      <div className="Trilogy">
        <div className="trilogy__title">Trilogy</div>

        <Movie/>
        <Movie/>
        <Movie/>
      </div>
    );
  }
}

export default Trilogy;
