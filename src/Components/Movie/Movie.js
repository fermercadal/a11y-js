import React from 'react'

class Movie extends React.Component {
  render() {
    return (
      <div className="Movie">
        <div className="movie__poster">
          <img src={this.props.data.poster}/>
        </div>
        
        <div className="movie__title">{ this.props.data.title }</div>
        <div className="movie__year">
          ({ this.props.data.year })
        </div>
    </div>
    );
  }
}

export default Movie;
