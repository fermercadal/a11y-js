import React from 'react'
import Movie from '../Movie/Movie';
import './Trilogy.scss';

class Trilogy extends React.Component {

  render() {
    const saga = this.props.saga;
    const trilogy = saga[this.props.series];
    const episodes = trilogy.episodes;

    const isDarkSide = this.props.currentSide.darkSide;
    const isLightSide = this.props.currentSide.lightSide;

    return (
      <main className={`Trilogy ${isDarkSide ? 'App__dark-side' : ''} ${isLightSide ? 'App__light-side' : ''}`}>
        <h2 className="trilogy__title">{ trilogy.title }</h2>

        {Object.keys(episodes).map((episode) => {
          return(
            <Movie key={episodes[episode].title} data={episodes[episode]} />
          )
        })}
      </main>
    );
  }
}

export default Trilogy;
