import React from 'react'
import './Navigation.scss';

class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.openSelect = this.openSelect.bind(this);
  }

  openSelect() {
    document.querySelector('.choose-your-side__options').classList.toggle('active');
  }

  render() {
    return (
      <div className="Navigation">
        <div className="choose-your-side" onClick={() => this.openSelect()}>
          <div className="choose-your-side__title">Choose your side:</div>
          <div className="choose-your-side__options">
            <div className="side__dark" onClick={this.props.changeSide.bind(this, 'darkSide', false)}>Dark Side</div>
            <div className="side__light" onClick={this.props.changeSide.bind(this, 'lightSide', false)}>Light side</div>
          </div>
        </div>


        <div 
          className={`trilogy__link button ${this.props.currentTrilogy === 'prequels' ? 'active' : ''}`}
          onClick={ this.props.changeTrilogy.bind(this, 'prequels', false) }>
            Prequels
        </div>

        <div 
          className={`trilogy__link button ${this.props.currentTrilogy === 'originals' ? 'active' : ''}`}
          onClick={ this.props.changeTrilogy.bind(this, 'originals', false) }>
            Originals
        </div>

        <div 
          className={`trilogy__link button ${this.props.currentTrilogy === 'sequels' ? 'active' : ''}`}
          onClick={ this.props.changeTrilogy.bind(this, 'sequels', false) }>
            Sequels
        </div>
      </div>
    );
  }
}

export default Navigation;
