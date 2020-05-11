import React from 'react'
import './Navigation.scss';

class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <div className="choose-your-side button">
          <div className="choose-your-side__title">Choose your side:</div>
          <div className="choose-your-side__options">
            <div className="side__dark">Dark Side</div>
            <div className="side__light">Light side</div>
          </div>
        </div>

        <div className="trilogy__link button">Prequels</div>
        <div className="trilogy__link button">Originals</div>
        <div className="trilogy__link button">Sequels</div>
      </div>
    );
  }
}

export default Navigation;
