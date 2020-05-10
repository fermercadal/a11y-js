import React from 'react'
import Movie from '../Movie/Movie';

class Trilogy extends React.Component {
  render() {
    const saga = this.props.saga;
    const trilogy = saga[this.props.series];

    const episodes = trilogy.episodes;
    
    

    return (
      <div className="Trilogy">
        <div className="trilogy__title">{ trilogy.title }</div>

        {Object.keys(episodes).map((episode) => {
          return(
            <Movie data={episodes[episode]} />
          )
        })}
        
      </div>
    );
  }
}

export default Trilogy;
