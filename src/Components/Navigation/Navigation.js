import React from 'react'

class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <div className="choose-your-side">
          <div className="side__dark">Dark Side</div>
          <div className="side__light">Light side</div>
        </div>

        <div className="trilogy__link">Prequels</div>
        <div className="trilogy__link">Originals</div>
        <div className="trilogy__link">Sequels</div>
      </div>
    );
  }
}

export default Navigation;
