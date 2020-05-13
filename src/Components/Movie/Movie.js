import React from 'react'
import './Movie.scss';

class Movie extends React.Component {
  render() {
    return (
      <article className="Movie">
        <h3 className="movie__title">{ this.props.data.title }</h3>
        <div className="movie__year">
          ({ this.props.data.year })
        </div>

        <div className="movie__poster">
          <img 
            src={this.props.data.poster}
            alt={this.props.data.posterDescription}/>
        </div>

        <a 
          className="movie__trailer" 
          target="_blank" 
          href={this.props.data.trailer}
          aria-label={`'Play ${ this.props.data.title } trailer'`}>
          Play trailer
        </a>
      </article>
    );
  }
}

export default Movie;
